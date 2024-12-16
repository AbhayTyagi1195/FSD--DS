import React,{useState} from "react-router-dom";
const WeatherApp = () => {
    const [city,setCity] = useState();
    const [weather,setWeather] = useState();
    const api_key="";
    const fetchdata = () => {
        alert("Weather Data");
    }
    return (
        <div>
            WeatherApp
            <input type="text" onChange={(e) => setCity(e.target.value)} />
            <button onClick={fetchdata}>fetch weather</button>
        </div>
    )
}
export default WeatherApp;