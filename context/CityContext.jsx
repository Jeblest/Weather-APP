"use client"

const { useContext, createContext,useState,useEffect } = require("react");

const CityContext = createContext();

export function CityProvider({children}){
    const [city, setCity] = useState("New York");
    const [lat, setLat] = useState(null);
    const [lon, setLon] = useState(null);

    useEffect(()=> {
        navigator.geolocation.getCurrentPosition(function(position) {
          setLat(position.coords.latitude);
          setLon(position.coords.longitude);
        });
      },[lat,lon])
    return (
        <CityContext.Provider value={{city, setCity,lat,lon}}>
            {children}
        </CityContext.Provider>
    )
}

export function useCity(){
    return useContext(CityContext);
}