import { Route, Routes, Navigate, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Signup from "./components/SignUp/index";
import Login from "./components/Login/index";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About"
import Properties from "./components/Properties/Properties";
import Logout from "./components/Logout/Logout";
import Protected from "./components/Protected/Protected";
import Display from "./components/Display/Display";
import Create from "./components/Create/Create";


const App = () => {

  const [auth, setauth] = useState(false);
  const [auth1, setauth1] = useState(true);

  const isLoggedIn = async () => {
    try {
      const res = await fetch('/auth',
        {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          credentials: "include"
        });

      if (res.status === 200) {
        setauth(true)
        setauth1(false)
      }
      if (res.status === 401) {
        setauth(false)
        setauth1(true)
      }

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    isLoggedIn();
  }, []);

  const user = localStorage.getItem("token");

  return (
    <div>
      <Navbar auth={auth1} />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/logout" exact element={<Logout />} />
        <Route path="/signup" exact element={<Signup />} />
        <Route path="/edit/:id" element={<Display />} />
        <Route path="/create"
          element={
            <Protected isLoggedIn={auth}>
              <Create />
            </Protected>
          }
        />
        <Route path="/properties"
          element={
            <Protected isLoggedIn={auth}>
              <Properties />
            </Protected>
          }
        />
        <Route path="/home" element={<Navigate replace to="/" />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;