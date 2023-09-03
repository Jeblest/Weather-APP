import axios from "axios";

function OverViewInfo({ weatherData, type }) {
  const data = weatherData?.list?.[0];
  return (
    <section className="flex flex-col mt-12 gap-6">
      <h1 className="text-xl text-gray-600 text-center">Today Overview</h1>
      <div className="grid grid-cols-2 gap-y-16 justify-between">
        <div className=" flex_center gap-6">
          <img className="w-8 h-8" src="assets/icons/air.png" alt="" />
          <div>
            <span className="block">Pressure</span>
            <span className="text-xl font-bold">{data?.main?.pressure}</span>
          </div>
        </div>
        <div className=" flex_center gap-6">
          <img className="w-8 h-8" src="assets/icons/light_rain.png" alt="" />
          <div>
            <span className="block ">Rain Chance</span>
            <span className="text-xl font-bold">{data?.pop}%</span>
          </div>
        </div>
        <div className=" flex_center gap-6">
          <img className="w-8 h-8" src="assets/icons/water.png" alt="" />
          <div>
            <span className="block">Humidity</span>
            <span className="text-xl font-bold">{data?.main?.humidity}</span>
          </div>
        </div>
        <div className=" flex_center gap-6">
          <img className="w-8 h-8" src="assets/icons/wind.png" alt="" />
          <div>
            <span className="block">Wind Speed</span>
            <span className="text-xl font-bold">
              {Math.floor(data?.wind?.speed)} km/h
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OverViewInfo;
