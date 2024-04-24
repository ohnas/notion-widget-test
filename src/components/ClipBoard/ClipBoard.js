import styles from './ClipBoard.module.css';

function ClipBoard({ widgetName, encodedBackgroundColor, encodedTextColor, handleData, copied }) {
    return (
        <div className={styles.clipboard}>
            <div className={styles.url}>
                <span>{`https://notion-widget-test.web.app/embeds/${widgetName}?background=${encodedBackgroundColor}&text=${encodedTextColor}`}</span>
            </div>
            <button onClick={handleData}>
                {copied ? "COPIED😃" : "COPY" }
            </button>
        </div>
    );
}

export default ClipBoard;