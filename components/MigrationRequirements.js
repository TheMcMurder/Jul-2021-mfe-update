import React from 'react'
import cls from "classnames";

const preAlphaRequirements = [
  'SystemJS',
]

const alphaRequirements = [
  'PreAlpha',
  'Quicksilver MFE',
  'Authentication MFE',
  'Feature Toggles MFE',
  'API MFE',
  'Workfront Inspector',
  'i18n MFE'
]

const betaRequirements = [
  'Alpha',
  'Phoenix MFE',
  'Dialogs MFE',
  'Shim support',
  'Main Navigation MFE',
  'Notification Hub MFE'
]

const RC1Requirements = [
  'Beta',
  'Secondary Navigation',
  'Page System',
  'React Spectrum MFE'
]

const RC2Requirements = [
  'Release Candidate 1',
  '...pending'
]

const stages = ['Pre-Alpha', 'Alpha', 'Beta', 'RC 1']

export default function MigrationRequirements() {
  return (
    <div className='flex justify-around w-screen px-0 md:px-16 lg:px-32 xl:px-60'>
      <MigrationStage name={'Pre-Alpha'} requirements={preAlphaRequirements} />
      <MigrationStage name={'Alpha'} requirements={alphaRequirements} />
      <MigrationStage name={'Beta'} active={true} requirements={betaRequirements} />
      <MigrationStage name={'RC 1'} complete={false} requirements={RC1Requirements} />
    </div>
  )

}

function MigrationStage ({name, requirements, active = false, complete = true}) {
  let stageStatus = 'Active'
  if (active === false && complete === true) {
    stageStatus = 'Complete'
  } else if (complete === false) {
    stageStatus = 'Not Started'
  }
  console.log('name', name, 'stageStatus', stageStatus)
  return (
    <RoundedBlock active={active}>
      <div
        className='flex items-center flex-col h-full'
        style={{minWidth: '8rem'}}
      >
        <div className='p-2'>
          <StateText base='text-white' active={active} complete={complete}>{name}</StateText>
        </div>
        <hr className='border-t-2 border-orange-700 w-full'/>
        <div className='p-2 flex-1'>
          <ul>
            {requirements.map((item, index) => {
              return (
                <li
                  key={item}
                  className={cls({"font-bold": index === 0 && name !== 'Pre-Alpha'}, 'text-white')}
                >
                  {item}
                </li>
              )
            })}
          </ul>
        </div>
        <hr className='border-t-2 border-orange-700 w-full'/>
        <div className='p-2'>
          <StateText complete={complete} active={active}>
            {stageStatus}
          </StateText>
        </div>
      </div>
    </RoundedBlock>
  )
}

function StateText ({children, active = false, complete = true, className, base = 'text-orange-700'}) {
  const evalObj = {
    'text-blue-700 animate-pulse': active,
    'text-gray-700': !active && !complete,
  }
  evalObj[base] = !active && complete
  return (
    <span className={cls('font-bold', evalObj, className)}>
      {children}
    </span>
  )
}

function RoundedBlock ({children, active = false}) {
  return (
    <div className={cls('border-2 bg-orange-500 rounded-lg border-orange-700 flex-1 mx-1', {'border-blue-700': active})}>
      {children}
    </div>
  )

}