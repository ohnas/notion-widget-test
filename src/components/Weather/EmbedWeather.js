import { useEffect, useState } from "react";
import styles from './EmbedWeather.module.css';

const API_KEY = process.env.REACT_APP_CURRENT_WEATHER_API_KEY;

function EmbedWeather() {
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
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getWeather(lat, lon)
        });
    },[]);

    return (
        <div className={styles.container}>
            {Object.keys(weather).length === 0 ? 
                <div className={styles.load}>
                    <span>Loading...</span>
                </div>
                :
                <div className={styles.item}>
                    <div className={styles.region}>
                        <span>{weather.country}</span>
                        <span>{weather.name}</span>
                    </div>
                    <div className={styles.weather}>
                        <img src={weather.weatherIconUrl} alt='weatherIcon'></img>
                        <span>{weather.weatherMain}</span>
                    </div>
                    <div className={styles.temp}>
                        <span>{Math.round(weather.temp)}°</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default EmbedWeather;