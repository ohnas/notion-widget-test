import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import FlipClock from "./components/FlipClock";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/notion-widget-test" element={<Home />} ></Route>
        <Route path="/notion-widget-test/flipclock" element={<FlipClock />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
