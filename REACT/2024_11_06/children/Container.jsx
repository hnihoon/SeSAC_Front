import React from 'react'

export default function Container({children}) {
  return (
    <div
        style={{
            width:300,
            height:300,
            backgroundColor: "white",
            display: "flex",
            justifyContent: "center"
        }}
    >
        {children}
    </div>
  )
}
