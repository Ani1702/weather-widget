import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}){
  let [city,setCity]=useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY="9f699ed20e4f1b237b4d8b9fdbd44a3b";

    let getWeatherInfo=async ()=>{
      let response=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      let jsonResponse=await response.json();
      // console.log(jsonResponse);
      let result={
        city:city,
        temp:jsonResponse.main.temp,
        feels_like:jsonResponse.main.feels_like,
        humidity:jsonResponse.main.humidity,
        temp_max:jsonResponse.main.temp_max,
        temp_min:jsonResponse.main.temp_min,
        description:jsonResponse.weather[0].description,
      }
      console.log(result);
      return result;
    }

    

    let handleCity=((event)=>{
        setCity(event.target.value);
    });

    let handleSubmit=async (event)=>{
      event.preventDefault();
      setCity("");
      let newInfo=await getWeatherInfo();
      updateInfo(newInfo);
    }

    return(
        <>
        <h3>Weather Widget</h3>

<form onSubmit={handleSubmit}>
        <TextField
        required
        id="city"
        label="City"
        value={city}
        onChange={handleCity}
      />
      <br /><br />
      <Button variant="contained" type="submit">
        Search
      </Button>

      </form>   


      </>
    )
}