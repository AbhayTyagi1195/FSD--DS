import React from 'react'
import {BrowserRouter ,Routes , Route } from 'react-router-dom';
import MainLayout from './components/MainLayout';
import Register from './components/Register';
import Logout from './components/Logout';
import Login from './components/Login';
const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/login' element={<Login />}/>
                        <Route path='/register' element={<Register />}/>
                        <Route path='/logout' element={<Logout />}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App