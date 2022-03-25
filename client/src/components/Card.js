import React, { useEffect } from "react";
import styled from "styled-components";
import "./Card.css";
import product from "../Utility/product.jpg";
import Btn from "./Btn";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
const Card = () => {
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

  return (
    <ProductCard>
      <div className="product_container">
        {result.item.data.length !== 0 ? (
          result.item.data.map((items) => (
            <div className="product">
              <img src={product} alt="" />
              <div className="detail">
                <h4>{items.name}</h4>
                <p> {items.description} </p>
              </div>
              <Btn Name={items.name} desc={items.description} />
            </div>
          ))
        ) : (
          <h1>Empty Basket</h1>
        )}
      </div>
    </ProductCard>
  );
};

const ProductCard = styled.div`
height: 370px;
width: 320px;
border-radius: 5px;
border:1px solid #ccc ;
margin-left: 30px;

img {
    width: 320px;
    height: 200px;
    object-fit: fill;
    align-items: center;
    justify-content: center;
}
`;

const Content = styled.div`
  h5 {
    font-weight: bold;
    font-size: 15px;
    margin-top: 5px;
    margin-left: 12px;
  }

  p {
    color: darkgrey;
    font-size: 15px;
    margin-top: -12px;
    text-align: left;
    margin-left: 4px;
  }

  button {
    width: 100%;
    padding: 16px 20px;
    border-radius: 4px;
    border: none;
    background-color: #7f00ff;
    color: #fff;
    margin-top: 10px;
  }
`;

export default Card;
