import styled from "styled-components";

const Header = (props) => {
    return (
        <Nav>
            <Logo>
                <img src="" alt="" />
            </Logo>

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
        </Nav>
    );
}

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
letter-spacing:5px;
z-index: 3;
`;

const NavMenu = styled.div`

align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0;
padding: 0;
position: relative;
margin-right: auto;
margin-left: auto;

a{
    display: flex;
    align-items: center;
    padding: 0 12px;

   

    span{
        color: #000;
        text-decoration: none;
        font-size: 15px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space: nowrap;
        position: relative;
        text-decoration: none;
    

    &:before {
        background-color: black;
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

&:hover{
    span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
  }
}
`;

const Logo = styled.a``;

export default Header;