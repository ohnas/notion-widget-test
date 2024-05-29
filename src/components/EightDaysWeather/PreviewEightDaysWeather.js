import { useEffect, useState } from "react";
import styles from './PreviewEightDaysWeather.module.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function PreviewEightDaysWeather() {
    const [weather, setWeather] = useState({});
    
    function getWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            const temp = data.main.temp;
            const name = data.name;
            const country = data.sys.country;
            const weatherIcon = data.weather[0].icon;
            const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            const weatherMain = data.weather[0].main;
            setWeather({
                temp : temp,
                name : name,
                country : country,
                weatherIcon : weatherIcon,
                weatherIconUrl : weatherIconUrl,
                weatherMain : weatherMain,
            });
        })
        .catch((error) => {
            alert('Something went wrong', error);
        })
    }

    useEffect(() => {
        const lat = 37.6429582;
        const lon = 126.6236117
        getWeather(lat, lon);
    },[]);
    
    // useEffect(() => {
    //     navigator.geolocation.getCurrentPosition((position) => {
    //         let lat = position.coords.latitude;
    //         let lon = position.coords.longitude;
    //         getWeather(lat, lon);
    //         updatGeolocation(lat, lon);
    //     });
    // },[]);

    return (
        <div>hello</div>
    );
}

export default PreviewEightDaysWeather;