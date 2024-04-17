// import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import Widget from "./pages/widget/Widget";
import FlipClock from './components/FlipClock'

function App() {
  // const location = useLocation();
  // const [hideNav, setHideNav] = useState(false);
  
  // useEffect(() => {
  //   if (location.pathname.includes("embeds")) {
  //     setHideNav(true);
  //   } else {
  //     setHideNav(false);
  //   }
  // }, [ location ])

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/widget/:name" element={<Widget />} ></Route>
        <Route path="/embeds/flipclock" element={<FlipClock />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
