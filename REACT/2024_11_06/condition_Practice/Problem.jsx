

//방법1
// export default function Problem() {
//     const isLoggedIn = true;

//     if(isLoggedIn) {
//         return <div>환영합니다!</div>
//     } else {
//         return <div style={{ color: "red"}}>로그인이 필요합니다.</div>
//     }
// }

//방법2
// export default function Problem() {
//     const isLoggedIn = false;

//     return (
//     <>
//     {isLoggedIn ? <h3>환영합니다!</h3> : <div style={{ color: "red"}}>로그인이 필요합니다.</div>}
//     </>
//     )
// }

//방법3
// export default function Problem() {
//     const isLoggedIn = false;
//     return(
//         <>
//             {isLoggedIn && <div>환영합니다!</div>}
//             {!isLoggedIn && <div>로그인이 필요합니다</div>}
//         </>
//     )
// }