import React,{useState} from 'react'
import {BrowserRouter ,Routes , Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Register from './components/Register';
import Logout from './components/Logout';
import Login from './components/Login';
import Dashboard from "./components/Dashboard.jsx";
import WeatherApp from "./components/WeatherApp.jsx";
const App = () => {
    const [data, setData] = useState();
    return (
        <div>
            {JSON.stringify(data)}
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/login' element={<Login regLogin={data} />}/>
                        <Route path='/register' element={<Register regData={setData}/>}/>
                    </Route>
                    <Route path="/dashboard" element={<Dashboard regDash={data}/>}/>
                    <Route path='/logout' element={<Logout regLog={setData} />}/>
                    <Route path="/weather" element={<WeatherApp />}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App