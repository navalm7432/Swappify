import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import MyAd from "./components/MyAd";
import AddProduct from "./components/AddProduct";
import SignIn from "./components/SignIn";
import LoginPopup from "./components/LoginPopup";
import Profile from "./components/Profile";
import ErrorMessage from "./components/ErrorMessage";
import axios from "axios";
import { useDispatch } from "react-redux";
import Notification from "./components/Notification";
// import {userLoaded} from "./actions/authAction"
function App() {
  // const result = useSelector((state) => state);
  const dispatch = useDispatch();
  const [error, setError] = useState();
  useEffect(() => {
    const checkIsLoggedIn = () => {
      dispatch({
        type: "USER_LOADING",
      });

      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
        dispatch({
          type: "AUTH_ERROR",
        });
      }
      const config = {
        headers: {
          "Content-type": "application/json",
          "x_auth_token": token,
        },
      };

      axios
        .post("http://localhost:4000/api/auth/verify", config)
        .then((tokenRes) => {
      if (tokenRes.data) {
            axios
              .get("http://localhost:4000/api/auth/user", config)
              .then((user) => {
                dispatch({
                  type: "USER_LOADED",
                  payload: user.data,
                });
              });
          }
        })
        .catch((e) => {
          e?.response?.data?.msg && setError(e?.response?.data?.msg);
        });
    };
    checkIsLoggedIn();
    // eslint-disable-next-line
    
  }, []);

  return (
    <div className="App">
      {error && (
        <ErrorMessage eMessage={error} clearError={() => setError(undefined)} />
      )}
      <Header />
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/product">
            <Product />
          </Route>

          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/addproduct">
            <AddProduct />
          </Route>
          <Route exact path="/MyAd">
            <MyAd />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/loginpopup">
            <LoginPopup />
          </Route>
          <Route exact path="/notification">
            <Notification/>
          </Route>

          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
