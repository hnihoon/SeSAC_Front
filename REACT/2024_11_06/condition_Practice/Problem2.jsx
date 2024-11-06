import React from 'react'

// export default function Problem2() {
//     const isLoggedIn = true;
    
//     return(     
//     <>
//     {isLoggedIn ? null : <div>로그인이 필요합니다.</div>}
//     </>
//     )
// }

// export default function Problem2() {
//     const isLoggedIn = true;
    
//     return(
//     <>
//     {!isLoggedIn && <div>로그인이 필요합니다.</div>}
//     </>
//     )
// }

export default function Problem2() {
    const isLoggedIn = true;
    
    return(
    <>
    {!isLoggedIn && <div>로그인이 필요합니다.</div>}
    </>
    )
}
