import { useParams } from "react-router-dom";
import styles from './Widget.module.css'
import flipclock from '../../assets/images/flipclock.png'

const imges = {
    "flipclock" : flipclock,
}

function Widget() {
	const params = useParams();
	const widgetName = params.name;

    return(
        <div className={styles.container}>
            <div className={styles.img_box}>
                <img alt={widgetName} src={imges[widgetName]}></img>
            </div>
            <div className={styles.item}>
                <div className={styles.item_title}>
                    <span>{widgetName}</span>
                </div>
                <div className={styles.item_clipboard}>
                    <div className={styles.clipboard}>
                        <input type="text" value={`https://notion-widget-test.web.app/embeds/${widgetName}`} readonly />
                        {/* <button>복사</button> */}
                    </div>
                    <p>paste the url into your Notion page's /embed block.</p>
                </div>
            </div>
        </div>
    );

}

export default Widget;