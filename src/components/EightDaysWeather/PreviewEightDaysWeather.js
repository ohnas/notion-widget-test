import { useEffect, useState } from "react";
import styles from './PreviewEightDaysWeather.module.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function PreviewEightDaysWeather({ backgroundColor, backgroundColorChange, textColor, textColorChange, updatGeolocation }) {
    const [weather, setWeather] = useState({});
    const [region, setRegion] = useState({});
    
    function getWeather(lat, lon) {
        fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${API_KEY}&exclude=minutely,hourly,alerts&units=metric`)
        .then((response) => response.json())
        .then((data) => {
            setWeather({
                current : data.current,
                daily : data.daily
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

    function getDayOfWeekFromTimestamp(timestamp) {
        const date = new Date(timestamp * 1000);
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        const dayOfWeek = daysOfWeek[date.getUTCDay()];
        
        return dayOfWeek;
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
            {Object.keys(weather).length === 0 || Object.keys(region).length === 0 ? 
                <div className={styles.load}>
                    <span>Loading...</span>
                </div>
                :
                <div className={styles.item} style={backgroundColorChange === false ? null : {'backgroundColor':backgroundColor}}>
                    <div className={styles.current}>
                        <div className={styles.region} style={textColorChange === false ? null : {'color':textColor}}>
                            <span>{region.name}</span>
                            <span>{region.country}</span>
                        </div>
                        <div className={styles.weather}>
                            <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`} alt='weatherIcon'></img>
                        </div>
                        <div className={styles.temp} style={textColorChange === false ? null : {'color':textColor}}>
                            <span>{Math.round(weather.current.temp)}°</span>
                            <span>{weather.current.weather[0].main}</span>
                        </div>
                    </div>
                    <div className={styles.daily}>
                        {weather.daily.map((day) => (
                            <div className={styles.daily_item} key={day.dt}>
                                <div className={styles.daily_day} style={textColorChange === false ? null : {'color':textColor}}>
                                    <span>{getDayOfWeekFromTimestamp(day.dt)}</span>
                                </div>
                                <div className={styles.daily_weather}>
                                    <img src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt='weatherIcon'></img>
                                </div>
                                <div className={styles.daily_temp} style={textColorChange === false ? null : {'color':textColor}}>
                                    <span>{Math.round(day.temp.min)}°</span>
                                    <span>{Math.round(day.temp.max)}°</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default PreviewEightDaysWeather;