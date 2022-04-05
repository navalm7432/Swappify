import styled from "styled-components";
import Category from "./Category";
import Footer from "./Footer";
import Header from "./Header";
import Howtouse from "./Howtouse";
import HowWeWork from "./HowWeWork";
import ImgSlider from "./ImgSlider";
import ProductCard from "./ProductCard";
// import { useSelector } from "react-redux";

const Home = (props) => {
  // const result = useSelector((state) => state);
  return (
    <Container>
      <Header />
    <Main>
      <Title>
        <h1>Swappify</h1>
        <p>Grap your opportunities and best deals only at swappify with best quality products and verified customers.</p>
      <Search>
        <input type="text" placeholder="Search" />
        {/* <img src="images/loupe.png" alt=""/> */}
      </Search>
      </Title>
      <Content>
        <img src="images/friends.svg" alt=""/>
      </Content>
      </Main>
      <Category />
      <ProductCard />
      <ImgSlider />
      <HowWeWork />
      <Howtouse />
      <Footer />
      {/* <MyAd /> */}
    </Container>
  );
};

const Container = styled.main`
  //position: relative;
  min-height: calc(120vh - 250px);
  overflow-x: hidden;
  display: block;
  top: 0px;
  padding: 0 calc(3.5vw + 5px);

  &:after {
    //background: url("/images/m2.gif") center center / cover no-repeat fixed;
    background-color: 	rgb(138,43,226);
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Main = styled.div`
display: flex;
`;

const Content = styled.div`
margin-top: 120px;

`;

const Title = styled.a`
  width: 100%;

  h1 {
    margin-top: 210px;
    //text-align: center;
    margin-left: 50px;
    font-size: 4.5rem;
    font-family: Avenir-Roman, sans-serif;
    color: #fff;
    font-weight: 500;
    transform: translateY(0px);
    animation: float 3s ease-in-out infinite;
    text-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.6);
  }

  p {
    //text-align: center;
    margin-top: -35px;
    font-size: 25px;
    margin-left: 45px;
    width: 60%;
    margin-bottom: 60px;
    color: whitesmoke;
    transform: translateY(0px);
    animation: float 3s ease-in-out infinite;
    text-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.6);
  }

  @keyframes float {
    0% {
      text-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }

    50% {
      text-shadow: 0px 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translateY(-20px);
    }

    100% {
      text-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translateY(0px);
    }
  }
`;

const Search = styled.div`
float: center;

 input {
   margin-left: 50px;
   border: 3px solid #7f00ff;
   border-radius: 20px;
   width: 50%;
   padding: 10px 10px;
  // display: block;
   float: center;
   //margin: auto;
   //width: 50%;
 }

 input:focus {
   border:  2px solid #fe8dff;
   background-color: #ffe5ff;
   outline: none;

 }

 img {
   width: 20px;
   height: 20px;
   display: block;
   float: center;
   margin: auto;
   margin-top: -30px;
   margin-right: 240px;
 }


`;

export default Home;
