import React from 'react'

const users = [
    { id: 1, name: '김철수', age: 25, hobby: '독서' },
    { id: 2, name: '이영희', age: 28, hobby: '요리' },
    { id: 3, name: '박민수', age: 23, hobby: '게임' }
  ];

  const mapusers = users.map((user) => {
    // console.log(user.id);
    return <div>id: {user.id},&nbsp;&nbsp;name: {user.name},&nbsp;&nbsp;hobby: {user.hobby}</div>
  })
export default function Users() {
  return (
    <div>
      {mapusers}
     </div>
  )
}
