import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Widget.module.css'
import PreviewFlipClock from "../../components/FlipClock/PreviewFlipClock";
import PreviewQuickButton from "../../components/QuickButton/PreviewQuickButton";
import Picker from "../../components/Picker/Picker";
import ClipBoard from "../../components/ClipBoard/ClipBoard";

function Widget() {
	const params = useParams();
	const widgetName = params.name;
    const advancedComponents = ["quickbutton"];
    const [isAdvanced, setIsAdvanced] = useState(false);
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
    useEffect(() => {
        if(advancedComponents.includes(widgetName)) {
            setIsAdvanced(true);
        }
    }, [widgetName])

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
                {widgetName === "quickbutton" ? <PreviewQuickButton 
                        backgroundColor={backgroundColor} 
                        backgroundColorChange={backgroundColorChange}
                        textColor={textColor}
                        textColorChange={textColorChange} 
                    /> 
                    : null
                }
            </div>
            {isAdvanced ?
                null 
                : 
                <Picker backgroundColor={backgroundColor} textColor={textColor} handleBackgroundColor={handleBackgroundColor} handleTextColor={handleTextColor} handleResetBtn={handleResetBtn}  />
            }
            {isAdvanced ?
                null
                :
                <ClipBoard widgetName={widgetName} encodedBackgroundColor={encodedBackgroundColor} encodedTextColor={encodedTextColor} handleData={handleData} />
            }
            <div className={styles.info}>
                <span>paste the url into your Notion page's /embed block.</span>
            </div>
        </div>
    );

}

export default Widget;