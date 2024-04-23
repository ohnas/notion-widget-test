import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import styles from './EmbedFlipClock.module.css'


function EmbedFlipClock() {
  const [time, setTime] = useState(new Date());
  const [day, setDay] = useState(0);
  const [searchParams] = useSearchParams();
  
  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

  const backgroundColor = searchParams.get('background');
  const textColor = searchParams.get('text');

  useEffect(() => {
    const now = new Date();
    const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();

    // 첫 업데이트를 다음 정각에 맞춥니다.
    const timeoutId = setTimeout(() => {
      const newTime = new Date();
      newTime.setSeconds(0, 0);
      setTime(newTime);

      // 그 후 매분마다 시간을 업데이트합니다.
      const intervalId = setInterval(() => {
        const newTime = new Date();
        newTime.setSeconds(0, 0);
        setTime(newTime);
      }, 60000);

      // 컴포넌트가 언마운트될 때 인터벌을 정리합니다.
      return () => clearInterval(intervalId);
    }, msUntilNextMinute);

    // 컴포넌트가 언마운트될 때 타임아웃을 정리합니다.
    return () => clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    setDay(new Date().getDay())
  }, []);
  
  return(
    <div className={styles.container}>
      <div className={styles.item} style={backgroundColor === "" || backgroundColor === null ? null : {'backgroundColor':backgroundColor}}>
        <span className={styles.text} style={textColor === "" || textColor === null ? null : {'color':textColor}}>
          {String(time.getHours()).padStart(2, '0')}
        </span>
        <div className={styles.line}></div>
      </div>
      <div className={styles.item} style={backgroundColor === "" || backgroundColor === null ? null : {'backgroundColor':backgroundColor}}>
        <span className={styles.text} style={textColor === "" || textColor === null ? null : {'color':textColor}}>
          {String(time.getMinutes()).padStart(2, '0')}
        </span>
        <div className={styles.line}></div>
        <span className={styles.day} style={textColor === "" || textColor === null ? null : {'color':textColor}}>{days[day].toUpperCase()}</span>
      </div>
    </div>
  );
}

export default EmbedFlipClock;