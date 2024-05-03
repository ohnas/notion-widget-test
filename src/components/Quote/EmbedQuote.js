import { useEffect, useState } from 'react';
import styles from './EmbedQuote.module.css';
import { useSearchParams } from 'react-router-dom';

function EmbedQuote() {
    const [quote, setQuote] = useState("");
    const [searchParams] = useSearchParams();

    const backgroundColor = searchParams.get('background');
    const textColor = searchParams.get('text');

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
                <div className={styles.item} style={backgroundColor === "" || backgroundColor === null ? null : {'backgroundColor':backgroundColor}}>
                    <div className={styles.top}>
                        <span style={textColor === "" || textColor === null ? null : {'color':textColor}}>“</span>
                    </div>
                    <span style={textColor === "" || textColor === null ? null : {'color':textColor}}>{quote}</span>
                    <div className={styles.bottom}>
                        <span style={textColor === "" || textColor === null ? null : {'color':textColor}}>”</span>
                    </div>
                </div>
            }
        </div>
    );
}

export default EmbedQuote;