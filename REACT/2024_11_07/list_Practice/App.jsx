import Names from "./Names"
import Users from "./Users"
import Products from "./Products"
import Imgurls from "./Imgurls"
import Colors from "./Colors"
import Coffee from './Coffee'
import Apparel from "./apparel"

function App() {
  // const names = ['jun', 'alex', 'ken'].map((el) =>{
  //   return <div>{el}</div>
  // })
  // const names = ['jun', 'alex', 'ken']
  // const mappedNames = names.map((name) =>{
  //   return <div>{name}</div>
  // });

  // return (
  //   <div>
  //     {mappedNames}
  //   </div>  
  // )

///////////////////////여기서부터 과제///////////////////////

 return (
 <>
 <Names></Names>
 <br/>
 <Users></Users>
 <br/>
 <Products></Products>
 <br/>
 <Imgurls></Imgurls>
 <br/>
  <Colors></Colors>
 <br/>
  <Coffee></Coffee>
 <br/>
  <Apparel></Apparel>
 </>
 )
}

export default App
