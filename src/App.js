import { useEffect, useState } from "react";
import styles from './App.module.css';


function App() {
  const [time, setTime] = useState(new Date());

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

  const hours = time.getHours();
  const minutes = time.getMinutes();


  // useEffect(() => {
  //   const timerId = setInterval(() => {
  //     setTime(oldTime => {
  //       const newTime = new Date(oldTime.getTime() + 60000);
  //       newTime.setSeconds(0);
  //       return newTime;
  //     });
  //   }, 60000);

  //   return () => clearInterval(timerId);
  // }, []); // 종속성 배열을 비워 컴포넌트 마운트 시 한 번만 실행되게 합니다.

  // const hours = time.getHours();
  // const minutes = time.getMinutes();

  
  // useEffect(() => {
  //   const currentTime = new Date();
  //   currentTime.setSeconds(0);
  //   setTime(currentTime);

  //   // 1분(60000밀리초)마다 시간을 업데이트하는 타이머를 설정합니다.
  //   const timerId = setInterval(() => {
  //     const newTime = new Date(time.getTime() + 60000);
  //     setTime(newTime);
  //   }, 60000);

  //   // 컴포넌트가 언마운트될 때 타이머를 정리합니다.
  //   return () => {
  //     clearInterval(timerId);
  //   };
  // }, [time]);

  // const hours = time.getHours()
  // const minutes = time.getMinutes();

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
