import { useEffect, useState } from 'react';
import styles from './PreviewQuote.module.css';

function PreviewQuote({ backgroundColor, backgroundColorChange, textColor, textColorChange }) {
    const [quote, setQuote] = useState("");

    function getQuote() {
        fetch('https://api.adviceslip.com/advice')
        .then((response) => response.json())
        .then((data) => {
            setQuote(data.slip.advice);
        })
        .catch((error) => {
            alert('Something went wrong', error);
        })
    }

    useEffect(() => {
        getQuote();
    },[])

    return (
        <div className={styles.container}>
            {quote === "" ?
                <div className={styles.load}>
                    <span>Loading...</span>
                </div>
                :
                <div className={styles.item} style={backgroundColorChange === false ? null : {'backgroundColor':backgroundColor}}>
                    <div className={styles.top}>
                        <span style={textColorChange === false ? null : {'color':textColor}}>“</span>
                    </div>
                    <span style={textColorChange === false ? null : {'color':textColor}}>{quote}</span>
                    <div className={styles.bottom}>
                        <span style={textColorChange === false ? null : {'color':textColor}}>”</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default PreviewQuote;