"use client"
import dayjs from "dayjs";
import { getImg } from "@utils/getImg";
function Forecast({ weatherData }) {
  
  const today = dayjs().format("YYYY-MM-DD");
  console.log(weatherData)
  const filteredWeather = weatherData?.list?.filter((weather, index) => {
    const weatherTime = dayjs(weather?.dt * 1000).format("HH");
    
    if (weatherTime === "15") {
      return weather;
    }
    if (
      dayjs().hour() > 12 &&
      dayjs(weather.dt * 1000).format("YYYY-MM-DD") === today &&
      index === 0
    ) {
      return weather;
    }
  });
  return (
    <section className="flex flex-col mt-12 gap-4">
      <h1 className="text-2xl text-center text-gray-600">Forecast</h1>
      <div className="flex justify-evenly mt-4">
        {filteredWeather?.map((data, index) => (
          <div key={index} className="flex flex-col gap-2 items-center">
            <span>{dayjs(data.dt * 1000).format("ddd")}</span>
            <img
              className="w-12 h-12"
              src={getImg(data.weather[0].main)}
              alt=""
            />
            <span>{Math.floor(data.main.temp_max)}°</span>
          </div>
        ))}
      </div>
      
    </section>
  );
}

export default Forecast;
