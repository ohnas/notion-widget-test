import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/home/Home";
import FlipClock from "./components/FlipClock";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} ></Route>
        <Route path="/flipclock" element={<FlipClock />} ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
