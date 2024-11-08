import React from 'react'

export default function Button(props) {
    const { onClick, children, backgroundColor} = props
    const color = "white"
  return (
    <button onClick={onClick} style={{backgroundColor, color}}>{children}</button>
  )
}
