import React, { useEffect } from "react";
import styled from "styled-components";
// import "./Product.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import Card from './Card';

function Product() {

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

  return (
    <div className="app">
      <ProductMain>
     
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



const ProductCard = styled.div`
h3{
  color: rgb(138,43,226) ;
  font-size: 30px;
  margin-left: 40px;
  font-style: underline;
  margin-bottom: 50px;
}
`;




export default Product;
