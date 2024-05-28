import React, { useEffect, useState } from "react";
import "./css/style.css";

const Tempapp = () => {


    const [city, setCity] = useState(null);
    const [speed, setSpeed] = useState(null);
    const [country, setCountry] = useState(null);
    const [visibility, setVisibility] = useState(null);
    const [search, setSearch] = useState("Mumbai");

    useEffect(()=>{
        const fetchApi = async() =>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=0ebe10913afae86b2b392aa55f20480f&units=metric`;
            const response = await fetch(url);
            const responseson = await response.json();
            console.log(responseson);
            setVisibility(responseson);
            setCountry(responseson.sys);
            setCity(responseson.main);
            setSpeed(responseson.wind);
            
        }

        fetchApi();
    },[search]);


    const design = (
        <>
        <div className="main">
            <div className="box">
                <h3 className="title-app">Weather Forecast</h3>
                <div className="inputData">
                    <input  
                        type="search"
                        className="inputField"
                        value={search}
                        onChange={(event)=>{ setSearch(event.target.value) }} />

                </div>

                {!city ? (
                    <p>No Data found</p>
                ) : (
                    <div>
                        <div className="info">
                            <h2 className="location">
                                    <i className="fa fa-street-view"></i>{search}, {country.country}
                            </h2>
                           <div className="temp-text"> <h1 className="temp">
                            {city.temp}°C
                            </h1></div>
                            <div className="up-down">
                            <h3 className="tempmin_max"><i className="fa fa-arrow-up"></i> {city.temp_min}°C || <i className="fa fa-arrow-down"></i> {city.temp_max}°C</h3>
                            </div>
                            <div className="humidity">
                            <h3 className="tempmin_max">Humidity : {city.humidity}%</h3>
                            
                            <h3 className="tempmin_max">Visibility : {visibility.visibility/1000}Km</h3>
                            <h3 className="tempmin_max">Pressure : {city.pressure}hPa</h3>

                            <h3 className="tempmin_max">Wind Speed : {speed.speed}m/s</h3>
                            </div>

                            <button className="btn">Today Forcast</button>
                        </div>

                        <div className="wave-one"></div>
                        <div className="wave-one"></div>
                        <div className="wave-one"></div>
                    </div>
                )}

                
            </div>
        </div>    
        </>  
    );
    return design;
}

export default Tempapp;