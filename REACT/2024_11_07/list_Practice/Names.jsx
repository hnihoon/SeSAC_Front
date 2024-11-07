import React from 'react'

export default function Names() {
    const names = ['김철수', '이영희', '박민수', '정지원', '최동욱'];

    const mapnames = names.map((names) => {
      return <div>{names}</div>
    })
  return (
    <div>
      {mapnames}
    </div>
  )
}
