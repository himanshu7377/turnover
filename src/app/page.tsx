
import Register from './_components/Register'


import '../styles/globals.css'
import Header from './_components/Header'
import Add from './_components/Add'
import Verify from './_components/Verify'
import Login from './_components/Login'


export default async function Home() {


  return (
    <main>
      <Header/>
      <Add/>
   <Register/>
   {/* <Verify/> */}
   {/* <Login/> */}
    </main>
  
  )
}

