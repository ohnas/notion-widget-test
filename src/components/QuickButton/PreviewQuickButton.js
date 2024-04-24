import styles from './PreviewQuickButton.module.css'

function PreviewQuickButton({ backgroundColor, backgroundColorChange, textColor, textColorChange }) {
    function handleClick() {
        window.open('https://www.google.com', '_blank');
    } 
    
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <button className={styles.btn} onClick={handleClick}>Quick Button</button>
            </div>
        </div>
    );
}

export default PreviewQuickButton;