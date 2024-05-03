import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './Widget.module.css'
import PreviewFlipClock from "../../components/FlipClock/PreviewFlipClock";
import PreviewQuickButton from "../../components/QuickButton/PreviewQuickButton";
import PreviewWeather from "../../components/Weather/PreviewWeather";
import PreviewQuote from "../../components/Quote/PreviewQuote";
import Picker from "../../components/Picker/Picker";
import AdvancedPicker from "../../components/Picker/AdvancedPicker";
import ClipBoard from "../../components/ClipBoard/ClipBoard";
import AdvancedClipBoard from "../../components/ClipBoard/AdvancedClipBoard";

function Widget() {
	const params = useParams();
	const widgetName = params.name;
    const advancedPicker = ["quickbutton"];
    const advancedClipBoard = ["quickbutton", "weather"];
    const [isAdvancedPicker, setIsAdvancedPicker] = useState(false);
    const [isAdvancedClipBoard, setIsAdvancedClipBoard] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("#F1EFEE");
    const [backgroundColorChange, setBackgroundColorChange] = useState(false);
    const [textColor, setTextColor] = useState("#2d3436");
    const [textColorChange, setTextColorChange] = useState(false);
    const [title, setTitle] = useState("");
    const [titleChange, setTitleChange] = useState(false);
    const [url, setUrl]  = useState("https://google.com");
    const [urlChange, setUrlChange] = useState(false);
    const [encodedBackgroundColor, setEncodedBackgroundColor] = useState("");
    const [encodedTextColor, setEncodedTextColor] = useState("");
    const [encodedTitle, setEncodedTitle] = useState("");
    const [encodedUrl, setEncodedUrl] = useState("https://google.com");
    const [encodedLat, setEncodedLat] = useState(0);
    const [encodedLon, setEncodedLon] = useState(0);
    const [copied, setCopied] = useState(false);
    
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
    function handleTitle(event) {
        setTitle(event.target.value);
        setEncodedTitle(encodeURIComponent(event.target.value));
        setTitleChange(true);
    }
    function handleUrl(event) {
        setUrl(event.target.value);
        setEncodedUrl(encodeURIComponent(event.target.value));
        setUrlChange(true);
    }
    function handleResetBtn() {
        setBackgroundColorChange(false);
        setTextColorChange(false);
        setTitleChange(false);
        setBackgroundColor("#F1EFEE");
        setTextColor("#2d3436");
        setTitle("");
        setUrl("https://google.com");
        setEncodedBackgroundColor("");
        setEncodedTextColor("");
        setEncodedTitle("");
        setEncodedUrl("https://google.com");
        setCopied(false);
    }
    function handleData(event) {
        const targetUrl = event.target.previousElementSibling.firstElementChild.textContent;
        navigator.clipboard.writeText(targetUrl)
        .then(() => {
            setCopied((prev) => !prev);
        })
        .catch((error) => {
            alert('Something went wrong', error);
        })
    }
    function updatGeolocation(lat, lon) {
        setEncodedLat(encodeURIComponent(lat));
        setEncodedLon(encodeURIComponent(lon));
    }
    useEffect(() => {
        if(advancedPicker.includes(widgetName)) {
            setIsAdvancedPicker(true);
        }
        if(advancedClipBoard.includes(widgetName)) {
            setIsAdvancedClipBoard(true);
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
                        title={title}
                        titleChange={titleChange}
                        url={url}
                        urlChange={urlChange}
                    /> 
                    : null
                }
                {widgetName === "weather" ? <PreviewWeather 
                        backgroundColor={backgroundColor} 
                        backgroundColorChange={backgroundColorChange}
                        textColor={textColor}
                        textColorChange={textColorChange} 
                        updatGeolocation={updatGeolocation}
                    /> 
                    : null
                }
                {widgetName === "quote" ? <PreviewQuote 
                        backgroundColor={backgroundColor} 
                        backgroundColorChange={backgroundColorChange}
                        textColor={textColor}
                        textColorChange={textColorChange} 
                    /> 
                    : null
                }
            </div>
            {isAdvancedPicker ?
                <AdvancedPicker 
                    backgroundColor={backgroundColor} 
                    textColor={textColor} 
                    title={title}
                    url={url}
                    handleBackgroundColor={handleBackgroundColor} 
                    handleTextColor={handleTextColor} 
                    handleTitle={handleTitle}
                    handleUrl={handleUrl}
                    handleResetBtn={handleResetBtn} 
                />
                : 
                <Picker 
                    backgroundColor={backgroundColor} 
                    textColor={textColor} 
                    handleBackgroundColor={handleBackgroundColor} 
                    handleTextColor={handleTextColor} 
                    handleResetBtn={handleResetBtn}  
                />
            }
            {isAdvancedClipBoard ?
                <AdvancedClipBoard 
                    widgetName={widgetName} 
                    encodedBackgroundColor={encodedBackgroundColor} 
                    encodedTextColor={encodedTextColor} 
                    encodedTitle={encodedTitle}
                    encodedUrl={encodedUrl}
                    encodedLat={encodedLat}
                    encodedLon={encodedLon}
                    handleData={handleData} 
                    copied={copied}
                />
                :
                <ClipBoard 
                    widgetName={widgetName} 
                    encodedBackgroundColor={encodedBackgroundColor} 
                    encodedTextColor={encodedTextColor} 
                    handleData={handleData} 
                    copied={copied}
                />
            }
            <div className={styles.info}>
                <span>paste the url into your Notion page's /embed block.</span>
            </div>
        </div>
    );

}

export default Widget;