import styles from './AdvancedClipBoard.module.css'

function AdvancedClipBoard({ widgetName, encodedBackgroundColor, encodedTextColor, encodedTitle, encodedUrl, encodedLat, encodedLon, handleData, copied }) {
    
    if(widgetName === "weather") {
        return (
            <div className={styles.clipboard}>
                <div className={styles.url}>
                    <span>{`https://notion-widget-test.web.app/embeds/${widgetName}?background=${encodedBackgroundColor}&text=${encodedTextColor}&lat=${encodedLat}&lon=${encodedLon}`}</span>
                </div>
                <button onClick={handleData}>
                    {copied ? "COPIED😃" : "COPY" }
                </button>
            </div>
        ); 
    } else if(widgetName === "quickbutton") {
        return (
            <div className={styles.clipboard}>
                <div className={styles.url}>
                    <span>{`https://notion-widget-test.web.app/embeds/${widgetName}?background=${encodedBackgroundColor}&text=${encodedTextColor}&title=${encodedTitle}&place=${encodedUrl}`}</span>
                </div>
                <button onClick={handleData}>
                    {copied ? "COPIED😃" : "COPY" }
                </button>
            </div>
        );
    } else if(widgetName === "eightdaysweather") {
        return (
            <div className={styles.clipboard}>
                <div className={styles.url}>
                    <span>{`https://notion-widget-test.web.app/embeds/${widgetName}?background=${encodedBackgroundColor}&text=${encodedTextColor}&lat=${encodedLat}&lon=${encodedLon}`}</span>
                </div>
                <button onClick={handleData}>
                    {copied ? "COPIED😃" : "COPY" }
                </button>
            </div>
        ); 
    }
}

export default AdvancedClipBoard;