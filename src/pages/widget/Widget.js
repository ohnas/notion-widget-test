import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Widget.module.css'
import PreviewFlipClock from "../../components/FlipClock/PreviewFlipClock";

function Widget() {
	const params = useParams();
	const widgetName = params.name;
    const [backgroundColorChange, setBackgroundColorChange] = useState(false);
    const [textColorChange, setTextColorChange] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#F1EFEE");
    const [textColor, setTextColor] = useState("#2d3436");
    const [encodedBackgroundColor, setEncodedBackgroundColor] = useState("");
    const [encodedTextColor, setEncodedTextColor] = useState("");
    
    function handleBackgroundColor(event) {
        setBackgroundColor(event.target.value);
        setEncodedBackgroundColor(encodeURIComponent(event.target.value));
        setBackgroundColorChange(true);
    }
    function handleTextColor(event) {
        setTextColor(event.target.value);
        setEncodedTextColor(encodeURIComponent(event.target.value));
        setTextColorChange(true);
    }
    function handleResetBtn() {
        setBackgroundColorChange(false);
        setTextColorChange(false);
        setBackgroundColor("#F1EFEE");
        setTextColor("#2d3436");
        setEncodedBackgroundColor("");
        setEncodedTextColor("");
    }
    function handleData(event) {
        const url = event.target.previousElementSibling.firstElementChild.textContent;
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
            <div className={styles.title}>
                <span>{`${widgetName.toUpperCase()} Widget`}</span>
            </div>
            <div className={styles.item}>
                {widgetName === "flipclock" ? <PreviewFlipClock 
                        backgroundColor={backgroundColor} 
                        backgroundColorChange={backgroundColorChange}
                        textColor={textColor}
                        textColorChange={textColorChange} 
                    /> 
                    : null
                }
            </div>
            <div className={styles.color_picker}>
                <div className={styles.color}>
                    <label htmlFor="background">Background</label>
                    <input id="background" type="color" value={backgroundColor} onChange={handleBackgroundColor} />
                    <label htmlFor="text">Text</label>
                    <input id="text" type="color" value={textColor} onChange={handleTextColor} />
                </div>
                <button onClick={handleResetBtn}>RESET</button>
            </div>
            <div className={styles.clipboard}>
                <div className={styles.url}>
                    <span>{`https://notion-widget-test.web.app/embeds/${widgetName}?background=${encodedBackgroundColor}&text=${encodedTextColor}`}</span>
                </div>
                <button onClick={handleData}>COPY</button>
            </div>
            <div className={styles.info}>
                <span>paste the url into your Notion page's /embed block.</span>
            </div>
        </div>
    );

}

export default Widget;