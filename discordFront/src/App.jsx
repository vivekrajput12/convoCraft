import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/Home'
import Login from './pages/login/Login';
import ChatZone from './pages/chatZone';
function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route path ='/' element ={<Home/>}/>
    <Route path ='/login' element ={<Login />}/>
    <Route path = '/chatZone' element = {<ChatZone/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
