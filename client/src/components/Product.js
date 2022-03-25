import React, { useEffect } from "react";
import Modal from "./ProductModal";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import "./Product.css";
import product from "../Utility/product.jpg";
import Btn from "./Btn";
import { useHistory } from 'react-router';
import styled from "styled-components";
import Card from './Card';

function Product() {
  const history = useHistory();

  const result = useSelector((state) => state);
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:4000/api/items").then((res) => {
      if (res.data.status === "empty") {
        dispatch({
          type: "IS_EMPTY",
          payload: true,
        });
      } else {
        dispatch({
          type: "LOADING_ITEMS",
        });
        dispatch({
          type: "GET_ITEMS",
          payload: res.data,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = () => history.push('/addproduct');

  return (
    <div className="app">
      <ProductMain>
      <AddProduct>

        <Post>
          <h2>Post</h2>
          <p>Hey Customer, Do you want to post your ad, Please click the button to proceed.</p>
          <button type="button" onClick={handleClick}>Click Here</button>
        </Post>

        <Image>
          <img src="images/team1.svg" alt="" />
        </Image>

      </AddProduct>
      <ProductCard>
        <h3>Product Available..</h3>
      </ProductCard>
      <Card/>
    </ProductMain>
    </div>
  );
}


const ProductMain = styled.div`
/* padding:0 0 10px 10px ;
margin: 10px 10px 10px 20px ;
background-color: #202020; */
/* background-image: url("images/hero_circle.svg")  ;
margin-top: -50px;
background-repeat: no-repeat;
justify-content: center;
align-items: center;
width: 45rem;
margin-right: 20px; */

`;

const AddProduct = styled.div`
display: flex;

h2 {
  margin-top: 150px;
  font-size: 70px;
  color: #000;
}

p {
  margin-top:-15px ;
  font-size: 15px;
  color: #000;
}

button {
  /* margin-right: 40px;
  margin-top: 80px;
  margin-left: 70rem;
  border: none;
  background-color: #002366;
  color: #000;
  font-size: 25px;
  padding: 15px 70px;
  border-radius: 10px; */

  /* &:hover {
            background-color: #002C80;
            transform: translate(0px) ease-in-out;
            box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
        } */

}
`;

const ProductCard = styled.div`
h3{
  color:#000 ;
  font-size: 20px;
  margin-left: 40px;
  font-style: underline;
}
`;

const Post = styled.div`
flex: 0.4;

h2 {
  font-size: 100px;
  padding: 20px;
  margin-left: 60px;
  color: purple;
  font-family: sans-serif;
}

p {
  margin-left: 80px;
  margin-top: 50px;
  font-size: 20px;
  color: #bf53ff;
  width: 50%;
}

button {
  margin-left: 120px;
  margin-top: 60px;
  padding: 15px 40px;
  text-align: center;
  border-radius: 5px;
  border: none;
  color: #fff;
  background-color: #7f00ff;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  &:hover {
    background-color: #9f33ff;
    transform: translate(0px) ease-in-out;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}


`;

const Image = styled.div`
flex: 0.6;

img {
  margin-top: 50px;
  height: 800px;
  width: 850px;
}
`;



export default Product;
