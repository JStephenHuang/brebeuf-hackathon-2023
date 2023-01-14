import { Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./main-page/main-page";
import FormPage from "./form-page/form-page";
import AnimatedRoutes from "./components/animated-routes";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <AnimatedRoutes />
    </div>
  );
}

export default App;
