import styles from './AdvancedPicker.module.css';

function AdvancedPicker({ backgroundColor, textColor, title, url, handleBackgroundColor, handleTextColor, handleTitle, handleUrl, handleResetBtn}) {
    return (
        <div className={styles.color_picker}>
            <div className={styles.color}>
                <label htmlFor="background">Background</label>
                <input id="background" type="color" value={backgroundColor} onChange={handleBackgroundColor} />
                <label htmlFor="text">Text</label>
                <input id="text" type="color" value={textColor} onChange={handleTextColor} />
                <label htmlFor="title">Title</label>
                <input id="title" type="text" value={title} onChange={handleTitle} maxLength={"20"} />
                <label htmlFor="url">URL</label>
                <input id="url" type="url" value={url} onChange={handleUrl} />
            </div>
            <button onClick={handleResetBtn}>RESET</button>
        </div>
    );
}

export default AdvancedPicker;