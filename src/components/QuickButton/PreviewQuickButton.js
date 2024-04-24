import styles from './PreviewQuickButton.module.css'

function PreviewQuickButton({ backgroundColor, backgroundColorChange, textColor, textColorChange, title, titleChange, url, urlChange }) {
    function handleClick() {
        if(urlChange) {
            window.open(`${url}`, '_blank');
        } else {
            window.open(`${url}`, '_blank');
        }
    } 
    
    return(
        <div className={styles.container}>
            <div className={styles.item} style={backgroundColorChange === false ? null : {'backgroundColor':backgroundColor}}>
                <button className={styles.btn} onClick={handleClick} style={backgroundColorChange === false ? null : {'backgroundColor':backgroundColor}}>
                    <span className={styles.text} style={textColorChange === false ? null : {'color':textColor}}>
                        {titleChange === false ? "Quick Button" : `${title}`}
                    </span>
                </button>
            </div>
        </div>
    );
}

export default PreviewQuickButton;