export const GET = async (req, { params }) => {

  let { city } = params;
  const type = detectAPIType(city);
  try {
    let data;
    if (type === "geoLocation") {
      const location = params.city.split(",");
      const lat = location[0]
      const lon = location[1];
      data = [{
        lat, lon
      }]
      
    } else if( type === "cityName") {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${process.env.API_KEY}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      data = await response.json();
    }
    const weather = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=${process.env.API_KEY}&units=metric`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const weatherData = await weather.json();
    return new Response(JSON.stringify(weatherData), { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}

function detectAPIType(input) {
  // Regular expression pattern to match geo location format (latitude,longitude)
  const geoLocationPattern = /^[-+]?\d*\.\d+,\s*[-+]?\d*\.\d+$/;

  // Remove leading and trailing whitespace
  const trimmedInput = input.trim();

  if (geoLocationPattern.test(trimmedInput)) {
    return 'geoLocation';
  }

  // Assume it's a city name if it doesn't match the geo location pattern
  return 'cityName';
}

