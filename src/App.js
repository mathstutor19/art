import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import {Routes, Route} from "react-router-dom";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="service" element={<Services />} />
                <Route path="contact" element={<Contact />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="dashboard" element={<Dashboard />} />
            </Routes>
            {/* <Home />
            <About />
            <Services />
            <Contact /> */}
            <Footer />
        </>
    );
}

export default App;
