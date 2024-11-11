import React from "react"
import './App.css'
const App = ({name,email,college}) => {
    return (
        <div id="disp">
            <h1>Name:{name}</h1>
            <h2>Email Id:{email}</h2>
            <h2>College Name:{college}</h2>
        </div>
    );
};
export default App