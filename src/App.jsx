import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Step1";
import { Navigate, Route, Routes } from "react-router";
import RegisterTwo from "./pages/Step2";
import Step1 from "./pages/Step1";
import Step2 from "./pages/Step2";
import Summary from "./pages/Summary";

function App() {
    return (
        <>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
                <Route path="/" element={<Navigate to="/step-1" replace />} />
                <Route path="/step-1" element={<Step1 />} />
                <Route path="/step-2" element={<Step2 />} />
                <Route path="/summary" element={<Summary />} />
            </Routes>
        </>
    );
}

export default App;
