import React, { useState } from 'react'

export default function Counter() {

  const [num, setNum] = useState(0);

  return (
    <>
    <div>{num}</div>
    <button onClick={() => 
    // 방법1
    // setNum(num+1) 
    
    // 방법2
       setNum((prev) => prev + 1)
  }
      >클릭+</button>
    <button onClick={() => console.log(num)}>log출력</button>
    </>
  )
}
