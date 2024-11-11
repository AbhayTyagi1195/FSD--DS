import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'
import Marks from "./Marks.jsx";
import Profile from "./Profile.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App name={"Abhay Tyagi"} email={"abhay@gmail.com"} college={"ABES Engineering College"} />
    <Marks m1={87} m2={87} m3={85} m4={83} m5={85}/>
    <Marks m1={87} m2={87} m3={85} m4={83} m5={85}/>
    <Profile />
  </StrictMode>,
)
