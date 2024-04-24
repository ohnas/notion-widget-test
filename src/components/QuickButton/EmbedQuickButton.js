import { useSearchParams } from 'react-router-dom';
import styles from './EmbedQuickButton.module.css';

function EmbedQuickButton() {
    const [searchParams] = useSearchParams();

    const backgroundColor = searchParams.get('background');
    const textColor = searchParams.get('text');
    const title = searchParams.get('title');
    const place = searchParams.get('place');

    console.log(backgroundColor);
    console.log(textColor);
    console.log(title);
    console.log(place);


    function handleClick() {
        if(place === "" || place === null) {
            window.open('https://www.google.com', '_blank');
        } else {
            window.open(`${place}`, '_blank');
        }
    }    
    
    return(
        <div className={styles.container}>
            <div className={styles.item} style={backgroundColor === "" || backgroundColor === null ? null : {'backgroundColor':backgroundColor}}>
                <button className={styles.btn} onClick={handleClick} style={backgroundColor === "" || backgroundColor === null ? null : {'backgroundColor':backgroundColor}}>
                    <span className={styles.text} style={textColor === "" || textColor === null ? null : {'color':textColor}}>
                        {title === "" || title === null ? "Quick Button" : `${title}`}
                    </span>
                </button>
            </div>
        </div>
    );
}

export default EmbedQuickButton;