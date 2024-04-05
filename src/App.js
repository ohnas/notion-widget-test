import { useEffect, useState } from "react";
import styles from './App.module.css';


function App() {
  // 현재 시간을 state로 관리합니다.
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    // 현재 시간을 '시:분' 형태로 초기 설정합니다.
    const currentTime = new Date();
    currentTime.setSeconds(0); // 초를 0으로 설정하여 분 단위로만 시간을 표시합니다.
    setTime(currentTime);

    // 1분(60000밀리초)마다 시간을 업데이트하는 타이머를 설정합니다.
    const timerId = setInterval(() => {
      const newTime = new Date(time.getTime() + 60000);
      setTime(newTime);
    }, 60000);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => {
      clearInterval(timerId);
    };
  }, [time]);

  const hours = time.getHours()
  const minutes = time.getMinutes();

  return (
    <div className={styles.container}>
      <div className={styles.part}>
        <span className={styles.hours}>{String(hours).padStart(2, '0')}</span>
      </div>
      <div className={styles.part}>
        <span className={styles.minutes}>{String(minutes).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default App;
