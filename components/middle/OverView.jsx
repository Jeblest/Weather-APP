"use client"
import OverViewInfo from "./OverViewInfo";

function OverView({weatherData}) {
  return (
    <div>
      <OverViewInfo weatherData={weatherData}/>
    </div>
  );
}

export default OverView;
