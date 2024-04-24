import styles from './Picker.module.css';

function Picker({ backgroundColor, textColor, handleBackgroundColor, handleTextColor, handleResetBtn}) {
    return (
        <div className={styles.color_picker}>
            <div className={styles.color}>
                <label htmlFor="background">Background</label>
                <input id="background" type="color" value={backgroundColor} onChange={handleBackgroundColor} />
                <label htmlFor="text">Text</label>
                <input id="text" type="color" value={textColor} onChange={handleTextColor} />
            </div>
            <button onClick={handleResetBtn}>RESET</button>
        </div>
    );
}

export default Picker;