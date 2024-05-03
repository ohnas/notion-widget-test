import { useEffect, useState } from 'react';
import styles from './EmbedQuote.module.css';

function EmbedQuote() {
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
                <div className={styles.item}>
                    <span>{quote}</span>
                </div>
            }
        </div>
    );
}

export default EmbedQuote;