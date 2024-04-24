import styles from './AdvancedClipBoard.module.css'

function AdvancedClipBoard({ widgetName, encodedBackgroundColor, encodedTextColor, encodedTitle, encodedUrl, handleData }) {
    return (
        <div className={styles.clipboard}>
            <div className={styles.url}>
                <span>{`https://notion-widget-test.web.app/embeds/${widgetName}?background=${encodedBackgroundColor}&text=${encodedTextColor}&title=${encodedTitle}&place=${encodedUrl}`}</span>
            </div>
            <button onClick={handleData}>COPY</button>
        </div>
    );
}

export default AdvancedClipBoard;