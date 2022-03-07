import styled from "styled-components";
import Category from "./Category";
import Footer from "./Footer";
import Header from "./Header";
import Howtouse from "./Howtouse";
import HowWeWork from "./HowWeWork";
import ImgSlider from "./ImgSlider";
import ProductCard from "./ProductCard";
import MyAd from "./MyAd";

const Home = (props) => {
  return (
    <Container>
      <Header />

      <Title>
        <h1>Swappify</h1>
        <p>Grap your opportunities and best deals</p>
      </Title>
      <Category />
      <ProductCard />
      <ImgSlider />
      <HowWeWork />
      <Howtouse />
      <Footer />
      <MyAd />
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
    background: url("/images/m2.gif") center center / cover no-repeat fixed;
    content: "";
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index: -1;
  }
`;

const Title = styled.a`
  width: 100%;

  h1 {
    margin-top: 210px;
    text-align: center;
    font-size: 4rem;
    font-family: Avenir-Roman, sans-serif;
    color: black;
    font-weight: 500;
    transform: translateY(0px);
    animation: float 3s ease-in-out infinite;
    text-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.6);
  }

  p {
    text-align: center;
    margin-top: -35px;
    font-size: 20px;
    color: black;
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

export default Home;
