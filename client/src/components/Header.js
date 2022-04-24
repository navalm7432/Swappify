import React, { useState } from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
const Header = () => {
  const history = useHistory();
  const [notification, setNotification] = useState([]);
  const result = useSelector((state) => state);
  const handleClick = () => history.push("/profile");
  const handleClickBell = () => history.push("/notification");
  return (
    <Nav>
      <h1>SWAPPIFY</h1>

      <NavMenu>
        <a href="/home">
          <span>Home</span>
        </a>
        <a href="/about">
          <span>About</span>
        </a>
        <a href="/product">
          <span>Product</span>
        </a>
        <a href="/contact">
          <span>Contact</span>
        </a>
        <a href="/MyAd">
          <span>My-ad</span>
        </a>
      </NavMenu>
      <a href="/notification">
      <Bell>
        <img src="images/notification.png" alt="" />
        {notification.length !== 0 ? (
          <span className="badge">{notification.length}</span>
        ) : null}
      </Bell>
      </a>
      
      <Profile onClick={handleClick}>
        {result.auth.user && result.auth.user ? (
          <a href="/profile">
            <img src="images/user.png" alt="" />
            <span>{result.auth.user.name}</span>
          </a>
        ) : (
          <a href="/loginpopup">
            <img src="images/loggedOutUser.png" alt="" />
            <span>Login</span>
          </a>
        )}
      </Profile>
    </Nav>
  );
};

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 5px;
  z-index: 3;
  h1 {
    color: #000;
    font-family: "Kalam", cursive;
  }
`;

const Bell = styled.div`
  position: relative;
  box-sizing: border-box;

  img {
    margin-right: 10px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }

  .badge {
    position: absolute;
    top: 13px;
    right: 175px;
    height: 15px;
    width: 15px;
    padding: 0;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 0px;
  }
`;

const NavMenu = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;

    span {
      color: #000;
      text-decoration: none;
      font-size: 17px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-decoration: none;

      &:before {
        background-color: #000;
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }
    &:focus {
      span {
        color: #000;
      }
    }
    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    justify-content: center;
  }
  span {
    color: #000;
    letter-spacing: 0;
    font-weight: 550;
    text-transform: capitalize;
  }
  img {
    margin-right: 10px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

export default Header;
