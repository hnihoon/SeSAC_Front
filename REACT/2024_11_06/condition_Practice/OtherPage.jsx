import AdminPage from "./AdminPage";
import ManagerPage from "./ManagerPage ";
import UserPage from "./UserPage";

export default function OtherPage() {
  const userType = "manager"
  let result;
 const validTypes = {
  admin: <AdminPage/>,
  manager: <ManagerPage/>,
  user: <UserPage/>
  }
 
  for(let i in validTypes){
    if(i === userType){
      result = validTypes[i]
      break;
    }else{
      result = "잘못 입력하셨습니다."
    }
  } 

   return (
    <>
    <h1>나의 앱</h1>
    <h2>{result}</h2>
    </>
   )
   
  // const userType = "admin"
  // const validTypes = ["admin", "ManagerPage", "user"];
  // const pages = [<AdminPage/>, <ManagerPage/>, <UserPage/>];
  // let result;
 
  // for(let i in validTypes){
  //   if(validTypes[i] === userType){
  //     result = pages[i];
  //     break;
  //   }else{
  //     result = "잘못 입력하셨습니다."
  //   }
  // } 

  //  return (
  //   <>
  //   <h1>나의 앱</h1>
  //   <h2>{result}</h2>
  //   </>
  //  )

  // return (
  //   <>
  //     <h1>나의 앱</h1>
  //     {validTypes.includes(userType) ? <h2>{userType}</h2> : "잘못 입력하셨습니다."}
  //   </>
  // )
}