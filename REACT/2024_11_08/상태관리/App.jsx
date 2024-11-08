import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from './Button'
import Counter from './Counter'
import MovingDot from './MovingDot'
function App() {

  return (
    <>
      <div>App</div>
      {/* <Button onClick={() => alert('실행 완료!')} backgroundColor = "blue">확인</Button>
      <Button onClick={() => alert('취소 완료!')} backgroundColor = "red">취소</Button>
      <Button onClick={() => alert('보류 완료!')} backgroundColor = "gray">보류</Button>
      <Button onClick={() => alert('1억원을 얻었습니다')}backgroundColor = "purple">1억년</Button> */}

      <Counter></Counter>
      <MovingDot></MovingDot>
    </>
  )
}

export default App
