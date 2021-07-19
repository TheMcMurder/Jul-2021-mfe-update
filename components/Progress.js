import React from "react";
import cls from "classnames";

/*
Anchors are rendered using normal Markdown syntax.
If the url is a "local link", it renders a wouter Link. Otherwise, uses a normal anchor tag.
*/
export default function Progress(props) {
  const { className, children, status='in-progress'} = props
  const classByStatus = {
    'in-progress': 'text-blue-500 animate-pulse',
    'done': 'text-black font-bold',
    'not-started': 'text-red-600',
  }
  return (
    <span className={cls(classByStatus[status], className)}>
      {children}
    </span>
  )
}

export function InProgress(props) {
  return <Progress status={'in-progress'} {...props}/>
}

export function Done(props) {
  return <Progress status={'done'} {...props}/>
}

export function NotStarted(props) {
  return <Progress status={'not-started'} {...props}/>
}
