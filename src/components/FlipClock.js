import { useEffect, useState } from "react";
import styles from './FlipClock.module.css'

function FlipClock() {
    const [time, setTime] = useState(new Date());
    const [day, setDay] = useState("");

    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

    useEffect(() => {
      // 현재 시간을 가져옵니다.
      const now = new Date();
      // 다음 정각까지 남은 시간을 밀리초로 계산합니다.
      const msUntilNextMinute = (60 - now.getSeconds()) * 1000 - now.getMilliseconds();
  
      // 첫 업데이트를 다음 정각에 맞춥니다.
      const timeoutId = setTimeout(() => {
        const newTime = new Date();
        newTime.setSeconds(0, 0);  // 초와 밀리초를 0으로 설정합니다.
        setTime(newTime);
  
        // 그 후 매분마다 시간을 업데이트합니다.
        const intervalId = setInterval(() => {
          const newTime = new Date();
          newTime.setSeconds(0, 0);  // 초와 밀리초를 0으로 설정합니다.
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
            <div className={styles.item}>
              {String(time.getHours()).padStart(2, '0')}
              <div className={styles.line}></div>
            </div>
            <div className={styles.item}>
              {String(time.getMinutes()).padStart(2, '0')}
              <div className={styles.line}></div>
              {day !== "" ? <span className={styles.day}>{days[day].toUpperCase()}</span>: null}
            </div>
        </div>
    );
}

export default FlipClock;