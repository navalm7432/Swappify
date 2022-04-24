import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./Product.css";
import styled from "styled-components";
import axios from "axios";
import Btn from "./Btn";
// import picture from "../../../productImage/"
export default function MyAd() {
  const result = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleClick = () => history.push("/addproduct");
  const user_id = result.auth.user && result.auth.user.id;
  const res = result.item.data.filter(
    (items) =>
      items.user_id === user_id &&
      items.isSwapping !== true &&
      items.isSwapped !== true
  );

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
        {res.length !== 0 ? (
          res.map((items) => (
            <div className="product">
              <img src={`images/productImage/${items.image}`} alt="" />
              <div className="detail">
                <h4>{items.name}</h4>
                <p> {items.description} </p>
              </div>
              <div className="btn">
                <Btn
                  purpose="delete"
                  product_id={items._id}
                  Name={items.name}
                  desc={items.description}
                />
              </div>
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
    margin-top: 100px;
    font-size: 70px;
    color: #000;
  }

  p {
    margin-top: -45px;
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

  .product_container {
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;

    .product {
      //border: 1px solid #ccc;
      border: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: left;
      padding: .5px;
      border-radius: 8px;
      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    height: 340px;
    width: 250px;
    background-color:white ;

     
      .detail {
        height: 100px;
        width: 100%;
        // display: flex;
        // flex-direction: column;
        // align-items: center;
        h4 {
          text-align: left;
          font-size: 20px;
          margin-top: 3px;
          font-weight: normal;
          text-align: left;
        }
        p{
          color: gray;
          margin-top: -10px;
          text-align: left;

        }
      }
    }
    .product > img {
      width: 100%;
      object-fit: cover;
      border: none;

    }

    .product:hover {
      transform: scale(1.1);
     box-shadow: 0 10px 20px rgb(0 0 0 / 20%);
    }
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
    margin-top: 10px;
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
    margin-top: -100px;
    height: 800px;
    width: 850px;
  }
`;
