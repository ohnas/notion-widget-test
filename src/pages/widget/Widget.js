import { useParams } from "react-router-dom";
import styles from './Widget.module.css'
import FlipClock from "../../components/FlipClock";

function Widget() {
	const params = useParams();
	const widgetName = params.name;
    const handleData = (event) => {
        const url = event.target.previousElementSibling.firstElementChild.innerHTML;
        navigator.clipboard.writeText(url)
        .then(() => {
            console.log("Text copied to clipboard...");
        })
        .catch((error) => {
            console.log('Something went wrong', error);
        })
    }

    return(
        <div className={styles.container}>
            <div className={styles.item}>
                {widgetName === "flipclock" ? <FlipClock miniComponent={true} /> : null}
            </div>
        </div>
    );

}

export default Widget;