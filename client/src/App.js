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
import LoginPopup from './components/LoginPopup'
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
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

          <Route exact path="/signin">
            <SignIn />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
