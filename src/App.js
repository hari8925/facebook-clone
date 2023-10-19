import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
// import Navbar from "./components/Navbar";
import Market from "./components/Market";
import Home from "./components/Home";
import Groups from "./components/Groups";
import Game from "./components/Game";

function App() {
  return (
    <>
      {/* <Login /> */}
      {/* <Navbar /> */}
      <Routes>
        <Route path="/navbar" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route path="/market" element={<Market />} />
        <Route path="/groups" element={<Groups />} />
        <Route path="/game" element={<Game />} />

        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path="/logout" element={<Login />} /> */}
      </Routes>
    </>
  );
}

export default App;
