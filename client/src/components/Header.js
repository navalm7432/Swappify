import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector} from "react-redux";
const Header = () => {
  const history = useHistory();
  const result = useSelector((state) => state);
  const handleClick = () => history.push("/profile");
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
      <Profile onClick={handleClick}>
          {result.auth.user && result.auth.user ? (<a href="/profile">
          <img src="images/user.png" alt="" />
          <span>{result.auth.user.name}</span>
        </a>) :<a href="/loginpopup">
          <img src="images/loggedOutUser.png" alt="" />
          <span>Login</span>
        </a>}
        
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
  h1{
      color:white;
      font-family: 'Kalam', cursive;
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
      color: white;
      text-decoration: none;
      font-size: 17px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;
      text-decoration: none;

      &:before {
        background-color: white;
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
        color: white;
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
    color: white;
    letter-spacing:0;
    font-weight:550;
    text-transform: capitalize;
  }
  img {
      margin-right:10px;
    height: 30px;
    width: 30px;
    cursor: pointer;
  }
`;

export default Header;
