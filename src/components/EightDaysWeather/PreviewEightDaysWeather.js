import { useEffect, useState } from "react";
import styles from './PreviewEightDaysWeather.module.css';

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function PreviewEightDaysWeather() {
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
        const lat = 37.6429582;
        const lon = 126.6236117
        getGeo(lat, lon);
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
        <div className={styles.container}>
            {Object.keys(weather).length === 0 || Object.keys(region).length === 0 ? 
                <div className={styles.load}>
                    <span>Loading...</span>
                </div>
                :
                <div className={styles.item}>
                    <div className={styles.current}>
                        <div className={styles.region}>
                            <span>{region.name}</span>
                            <span>{region.country}</span>
                        </div>
                        <div className={styles.weather}>
                            <img src={`https://openweathermap.org/img/wn/${weather.current.weather[0].icon}@4x.png`} alt='weatherIcon'></img>
                        </div>
                        <div className={styles.temp}>
                            <span>{Math.round(weather.current.temp)}°</span>
                            <span>{weather.current.weather[0].main}</span>
                        </div>
                    </div>
                    <div className={styles.daily}>
                        {weather.daily.map((day) => (
                            <div key={day.dt}>{getDayOfWeekFromTimestamp(day.dt)}</div>
                        ))}
                    </div>
                </div>
            }
        </div>
    );
}

export default PreviewEightDaysWeather;