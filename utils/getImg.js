export const getImg = (desc) => {
  switch (desc) {
    case "Clear":
      return "assets/icons/clear.png";
    case "Thunderstorm":
      return "assets/icons/thunderstorm.png";
    case "Drizzle":
      return "assets/icons/drizzle.png";
    case "Rain":
      return "assets/icons/light_rain.png";
    case "Snow":
      return "assets/icons/snow.png";
    case "Clouds":
      return "assets/icons/cloudy-day.png";
    default:
      return "assets/icons/clear.png";
  }
};