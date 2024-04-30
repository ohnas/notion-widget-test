import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from './EmbedWeather.module.css';

const API_KEY = process.env.REACT_APP_CURRENT_WEATHER_API_KEY;

function EmbedWeather() {
    const [weather, setWeather] = useState({});
    const [searchParams] = useSearchParams();

    const backgroundColor = searchParams.get('background');
    const textColor = searchParams.get('text');
    const lat = searchParams.get('lat');
    const lon = searchParams.get('lon');
    
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
        if(lat !== "" && lat !== null && lon !== "" && lon !== null) {
            getWeather(lat, lon);
        }
    },[])

    return (
        <div className={styles.container}>
            {Object.keys(weather).length === 0 ? 
                <div className={styles.load}>
                    <span>Loading...</span>
                </div>
                :
                <div className={styles.item} style={backgroundColor === "" || backgroundColor === null ? null : {'borderColor':backgroundColor}}>
                    <div className={styles.region} style={textColor === "" || textColor === null ? null : {'color':textColor}}>
                        <span>{weather.country}</span>
                        <span>{weather.name}</span>
                    </div>
                    <div className={styles.weather}>
                        <img src={weather.weatherIconUrl} alt='weatherIcon'></img>
                        <span style={textColor === "" || textColor === null ? null : {'color':textColor}}>{weather.weatherMain}</span>
                    </div>
                    <div className={styles.temp} style={textColor === "" || textColor === null ? null : {'color':textColor}}>
                        <span>{Math.round(weather.temp)}°</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default EmbedWeather;