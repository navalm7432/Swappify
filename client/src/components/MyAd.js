import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./Product.css";
import styled from "styled-components";
import axios from "axios";
import product from "../Utility/product.jpg";
import Btn from "./Btn";

export default function MyAd() {
  const result = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => history.push("/addproduct");

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
      {/* <AddProduct /> */}
      <AddProduct>
        <Post>
          <h2>Post</h2>
          <p>
            Hey Customer, Do you want to post your ad, Please click the button
            to proceed.
          </p>
          <button type="button" onClick={handleClick}>
            Click Here
          </button>
        </Post>

        <Image>
          <img src="images/team1.svg" alt="" />
        </Image>
      </AddProduct>
        <h1>Your Products</h1>
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
    </div>
  );
}

const AddProduct = styled.div`
  display: flex;

  h2 {
    margin-top: 150px;
    font-size: 70px;
    color: #000;
  }

  p {
    margin-top: -15px;
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
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
        rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
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
