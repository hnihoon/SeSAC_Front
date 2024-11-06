import React from 'react'

export default function Cold() {
    const cold = true;
  let result
  if(cold){
    result = <div>감기걸림ㅠㅠ</div>;
  } else {
    result = <div>감기 안걸림</div>;
  }

  return result
}
