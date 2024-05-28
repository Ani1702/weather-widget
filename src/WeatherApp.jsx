import React, { useState } from 'react';
import SearchBox from './SearchBox';
import InfoBox from './InfoBox';

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Indore",
        temp: 40.12,
        feels_like: 24.09,
        humidity: 38,
        temp_max: 40.8,
        temp_min: 40.6,
        description: 'Cloudy',
    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return (
        <>
            <h2>Weather App</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo} />
        </>
    );
}
