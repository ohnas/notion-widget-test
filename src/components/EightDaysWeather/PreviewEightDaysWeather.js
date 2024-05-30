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

    useEffect(() => {
        const lat = 37.6429582;
        const lon = 126.6236117
        getGeo(lat, lon);
        getWeather(lat, lon);
    },[]);
    console.log(weather);
    console.log(region);
    
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