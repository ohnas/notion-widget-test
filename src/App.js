import { useEffect, useState } from "react";
import styles from './App.module.css';


function App() {
  // 현재 시간을 state로 관리합니다.
  const [time, setTime] = useState(new Date());
  
  useEffect(() => {
    // 1분마다 시간을 업데이트하는 타이머를 설정합니다.
    const timerId = setInterval(() => {
      setTime(new Date());
    }, 60000);

    // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
    return () => clearInterval(timerId);
  }, []);

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
