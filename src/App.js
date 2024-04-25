import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Widget from "./pages/widget/Widget";
import EmbedFlipClock from "./components/FlipClock/EmbedFlipClock";
import EmbedQuickButton from "./components/QuickButton/EmbedQuickButton";
import EmbedWeather from "./components/Weather/EmbedWeather";

function App() {
  const location = useLocation();
  const [hideNav, setHideNav] = useState(false);
  
  useEffect(() => {
    if (location.pathname.includes("embeds")) {
      setHideNav(true);
    } else {
      setHideNav(false);
    }
  }, [ location ])

  return (
    <>
      {hideNav ? null : <Nav />}
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/widget/:name" element={<Widget />} ></Route>
        <Route path="/embeds/flipclock" element={<EmbedFlipClock />} ></Route>
        <Route path="/embeds/quickbutton" element={<EmbedQuickButton />} ></Route>
        <Route path="/embeds/weather" element={<EmbedWeather />} ></Route>
      </Routes>
    </>
  );
}

export default App;
