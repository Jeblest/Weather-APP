"use client";
import SearchBar from "@components/middle/SearchBar";
import OverView from "@components/middle/OverView";
import Forecast from "@components/middle/Forecast";
import DailyInfo from "@components/right/DailyInfo";
import NavBar from "@components/NavBar";
import { useEffect, useState } from "react";
import { useCity } from "@context/CityContext";

function DashBoard() {
  const [weatherData, setWeatherData] = useState(null);
  const { city, lat, lon,setCity } = useCity();
  console.log(city)
  const geo = {
    lat,
    lon,
  };
  const getData = async (type) => {
    let apiUrl = `/api/`;

    
    if(type === "geo"){
      apiUrl += `${geo.lat},${geo.lon}`;
    }else if (type === "city"){
      apiUrl += city;
    }
    try {
      const res = await fetch(apiUrl);
      const data = await res.json();
      console.log(data)
      setWeatherData(data);
    } catch (error) {
      // Handle any errors that occur during the fetch
      console.error("Error fetching weather data:", error);
    }
  };

  useEffect(() => {
    getData("geo")
  }, [lat,lon]);
  useEffect(() => {
    getData("city")
  },[city])
 
  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-2">
        <NavBar />
      </div>
      <div className="col-span-6 mx-12">
        <SearchBar />
        <OverView weatherData={weatherData} />
        <Forecast weatherData={weatherData} />
      </div>
      <div className="col-span-4">
        <DailyInfo weatherData={weatherData} />
      </div>
    </div>
  );
}

export default DashBoard;
