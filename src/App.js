import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Widget from "./pages/widget/Widget";
import FlipClock from './components/FlipClock'

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
        <Route path="/notion-widget-test" element={<Home />} ></Route>
        <Route path="/notion-widget-test/widget/:name" element={<Widget />} ></Route>
        <Route path="/notion-widget-test/embeds/flipclock" element={<FlipClock />} ></Route>
      </Routes>
    </>
  );
}

export default App;
