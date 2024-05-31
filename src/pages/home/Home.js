import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import flipclock from '../../assets/images/flipclock.png';
import quickbutton from '../../assets/images/quickbutton.png';
import weather from '../../assets/images/weather.png';
import quote from '../../assets/images/quote.png';
import eightdaysweather from '../../assets/images/eightdaysweather.png'

function Home() {
    return(
        <div className={styles.container}>
            <div className={styles.grid_continer}>
                <div className={styles.item}>
                    <Link to={"/widget/flipclock"}>
                        <div className={styles.item_img}>
                            <img src={flipclock} alt='flipclock'></img>
                        </div>
                        <div className={styles.item_title}>
                            <span className={styles.title}>Flip Clock</span>
                            <span className={styles.content}>It is a simple clock widget that can check the time</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link to={"/widget/quickbutton"}>
                        <div className={styles.item_img}>
                            <img src={quickbutton} alt='quickbutton'></img>
                        </div>
                        <div className={styles.item_title}>
                            <span className={styles.title}>Quick Button</span>
                            <span className={styles.content}>Click to go to URL</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link to={"/widget/weather"}>
                        <div className={styles.item_img}>
                            <img src={weather} alt='weather'></img>
                        </div>
                        <div className={styles.item_title}>
                            <span className={styles.title}>Weather</span>
                            <span className={styles.content}>It is a simple widget for the current weather.</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link to={"/widget/quote"}>
                        <div className={styles.item_img}>
                            <img src={quote} alt='quote'></img>
                        </div>
                        <div className={styles.item_title}>
                            <span className={styles.title}>Quote</span>
                            <span className={styles.content}>It is a simple widget for a quote</span>
                        </div>
                    </Link>
                </div>
                <div className={styles.item}>
                    <Link to={"/widget/eightdaysweather"}>
                        <div className={styles.item_img}>
                            <img src={eightdaysweather} alt='eightdaysweather'></img>
                        </div>
                        <div className={styles.item_title}>
                            <span className={styles.title}>8 Days Weather</span>
                            <span className={styles.content}>It is a simple 8-day weather widget.</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;