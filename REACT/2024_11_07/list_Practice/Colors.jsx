import React from 'react'

  const colors = [
    {backgroundColor: "blue", text: "확인"},
    {backgroundColor: "red", text: "취소"},
    {backgroundColor: "gray", text: "보류"},
    {backgroundColor: "purple", text: "1억년"}
  ]

  const mapcolor = colors.map((colors) =>{
    return <button style={{color: "white",backgroundColor: colors.backgroundColor, width: "60px", height: "40px"}}>{colors.text}</button>
  })

export default function Colors() {
  return (
    <div>{mapcolor}</div>
  )
}
