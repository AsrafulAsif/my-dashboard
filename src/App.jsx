import { Route, Routes } from "react-router-dom"
import SideBar from "./component/SideBar"

function App() {
  return (
    <div className='h-screen bg-red-50 flex'>
      <SideBar/>
      <div className='flex-1 m-5 bg-white'> 
      <Routes>
        <Route path="/" element = {'DeshBoard'}></Route>
        <Route path="/profile" element = {'Profile'}></Route>
        <Route path="/notification" element = {'Notification'}></Route>
      </Routes>
      </div>
    </div>
  )
}

export default App
