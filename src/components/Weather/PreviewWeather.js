import { useEffect, useState } from "react";
import styles from './PreviewWeather.module.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function PreviewWeather({ backgroundColor, backgroundColorChange, textColor, textColorChange, updatGeolocation }) {
    const [weather, setWeather] = useState({});
    const [region, setRegion] = useState({});
    
    function getWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=minutely,hourly,alerts,daily&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            const temp = data.current.temp;
            const weatherIcon = data.current.weather[0].icon;
            const weatherIconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
            const weatherMain = data.current.weather[0].main;
            setWeather({
                temp : temp,
                weatherIcon : weatherIcon,
                weatherIconUrl : weatherIconUrl,
                weatherMain : weatherMain,
            });
        })
        .catch((error) => {
            alert('Something went wrong', error);
        })
    }

    function getGeo(lat, lon) {
        fetch(`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&appid=${API_KEY}&limit=1`)
        .then((response) => response.json())
        .then((data) =>{
            setRegion(data[0]);
        })
        .catch((error) => {
            alert('Something went wrong', error);
        })
    }
    
    useEffect(() => {
        navigator.geolocation.getCurrentPosition((position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            getGeo(lat, lon);
            getWeather(lat, lon);
            updatGeolocation(lat, lon);
        });
    },[]);

    return (
        <div className={styles.container}>
            {Object.keys(weather).length === 0 && Object.keys(region).length === 0 ? 
                <div className={styles.load}>
                    <span>Loading...</span>
                </div>
                :
                <div className={styles.item} style={backgroundColorChange === false ? null : {'borderColor':backgroundColor}}>
                    <div className={styles.region} style={textColorChange === false ? null : {'color':textColor}}>
                        <span>{region.name}</span>
                        <span>{region.country}</span>
                    </div>
                    <div className={styles.weather}>
                        <img src={weather.weatherIconUrl} alt='weatherIcon'></img>
                        <span style={textColorChange === false ? null : {'color':textColor}}>{weather.weatherMain}</span>
                    </div>
                    <div className={styles.temp} style={textColorChange === false ? null : {'color':textColor}}>
                        <span>{Math.round(weather.temp)}°</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default PreviewWeather;