import { useEffect, useState } from "react";

const API_KEY = process.env.REACT_APP_CURRENT_WEATHER_API_KEY;

function EmbedWeather() {
    const [weather, setWeather] = useState({});
    
    function getWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            const temp = data.main.temp;
            const tempMax = data.main.temp_max;
            const tempMin = data.main.temp_min;
            const humidity = data.main.humidity;
            const name = data.name;
            const country = data.sys.country;
            const weatherDes = data.weather[0].description;
            const weatherIcon = data.weather[0].icon;
            const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            const weatherMain = data.weather[0].main;
            setWeather({
                temp : temp,
                tempMax : tempMax,
                tempMin : tempMin,
                humidity : humidity,
                name : name,
                country : country,
                weatherDes : weatherDes,
                weatherIcon : weatherIcon,
                weatherIconUrl : weatherIconUrl,
                weatherMain : weatherMain,
            });
        })
        .catch((error) => {
            alert('Something went wrong', error);
        })
    }
    
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         let lat = position.coords.latitude;
    //         let lon = position.coords.longitude;
    //         getWeather(lat, lon)
    //     });
    // },[]);

    return (
        <div>Weather</div>
    );
}

export default EmbedWeather;