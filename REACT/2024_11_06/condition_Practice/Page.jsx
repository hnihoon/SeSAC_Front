import AdminPage from "./AdminPage"
import UserPage from "./UserPage"

export default function Page() {
    const isAdmin = false

    let renderedPage

    if(isAdmin){
      renderedPage = <AdminPage></AdminPage>
    } else {
      renderedPage = <UserPage></UserPage>
    }

  return (
    <>
      <h1>나의 앱</h1>
      {renderedPage}
    </>
  )
  }