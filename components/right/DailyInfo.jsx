"use client";
import { useCity } from "@context/CityContext";
import dayjs from "dayjs";
import { getImg } from "@utils/getImg";
import TemperatureChangeChart from "../TemperatureChangeChart";
function DailyInfo({ weatherData }) {
  const chartData = weatherData?.list.map((data) => {
   
      return {
        hour: dayjs(data.dt * 1000).format("HH"),
        temperature: Math.floor(data.main.temp),
      };
    
  });
  const today = weatherData?.list[0];
  return (
    <section className="bg-gradient-to-b from-right_top to-right_bottom h-screen flex flex-col px-16 ">
      <div className="flex justify-between items-center mt-4 ">
        <span className="text-white text-2xl">{weatherData?.city?.name}</span>
        <span className="text-white text-xl">{dayjs().format("HH:mm")}</span>
      </div>
      <div className="flex items-center justify-between mt-12 mb-8">
        <div>
          <img
            className="w-16 h-16"
            src={getImg(today?.weather[0].main)}
            alt=""
          />
          <span className="text-white text-5xl">
            {Math.floor(today?.main.temp)}° C
          </span>
        </div>
        <span className="text-white text-2xl">{today?.weather[0].main}</span>
      </div>
      <div className="h-0.5 w-full bg-gray-400"></div>
      <TemperatureChangeChart temperatureData={chartData?.slice(0,12)} />


      <div className="mt-8">
        <div className="flex bg-blue-500 py-4 items-center justify-between px-8 rounded-lg">
          <div className="flex gap-4">
            <img className="w-8 h-8" src="/assets/icons/sunrise.png" alt="" />
            <div>
              <span className="text-gray-700">Sunrise</span>
              <div className="text-white">
                {dayjs(weatherData?.city.sunrise * 1000).format("HH:mm")}
              </div>
            </div>
          </div>
          <span className="text-white">
            {dayjs().hour() - dayjs(weatherData?.city.sunrise * 1000).hour() > 0
              ? Math.abs(
                  dayjs().hour() -
                    dayjs(weatherData?.city.sunrise * 1000).hour()
                ) + " hours ago"
              : "In" +
                Math.abs(
                  dayjs().hour() -
                    dayjs(weatherData?.city.sunrise * 1000).hour()
                ) +
                "hours"}
          </span>
        </div>
        <div className="flex bg-blue-500 py-4 items-center justify-between px-8 mt-4 rounded-lg">
          <div className="flex gap-4">
            <img className="w-8 h-8" src="/assets/icons/sunset.png" alt="" />
            <div>
              <span className="text-gray-700">Sunset</span>
              <div className="text-white">
                {dayjs(weatherData?.city.sunset * 1000).format("HH:mm")}
              </div>
            </div>
          </div>
          <span className="text-white">
            {dayjs().hour() - dayjs(weatherData?.city.sunset * 1000).hour() > 0
              ? Math.abs(
                  dayjs().hour() - dayjs(weatherData?.city.sunset * 1000).hour()
                ) + " hours ago"
              : "In " +
                Math.abs(
                  dayjs().hour() - dayjs(weatherData?.city.sunset * 1000).hour()
                ) +
                " hours"}
          </span>
        </div>
      </div>
    </section>
  );
}

export default DailyInfo;
