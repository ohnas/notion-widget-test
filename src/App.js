import { useEffect, useState } from "react";

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


  return (
    <div>
      <h2>현재 시간</h2>
      <p>{time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
    </div>
  );
}

export default App;
