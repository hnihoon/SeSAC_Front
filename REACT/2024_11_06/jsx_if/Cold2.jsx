import React from 'react'

export default function Cold() {
    const cold = false;
  
  return (
      <div>
        {cold ? "감기걸림" : "감기안걸림"}
      </div>
  )
}
