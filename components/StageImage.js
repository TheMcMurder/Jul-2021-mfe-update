import React from 'react'

export default function StageImage(props) {
  const { src, stage} = props
  return (
    <img
      src={src}
      style={{maxHeight: '18rem'}}
      className='mx-auto absolute inset-0 p-10'
      alt={`This image acts as a sub-title, illustrating that the content below is discussing the ${stage} stage of the migration`}
    />
  )
}