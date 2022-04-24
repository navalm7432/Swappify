import React, { useEffect } from "react";
import styled from "styled-components";
import product from "../Utility/product.jpg";
import Btn from "./Btn";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

const Card = () => {
  const result = useSelector((state) => state);
  const dispatch = useDispatch();
  const user_id = result.auth.user && result.auth.user.id;
  const res = result.item.data.filter(
    (items) =>
      items.user_id !== user_id &&
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
  // console.log(result.item.filter(res => res.id == user_id));

  return (
    <ProductCard>
      <div className="product_container">
        {result.item.data.length !== 0  ? (
          res.map((items) => (
            <product>
            <div className="product">
              <img src={`images/productImage/${items.image}`} alt="" />
              <div className="detail">
                <h4>{items.name}</h4>
                <p> {items.description} </p>
                <p> {items.city} </p>
              </div>
              <Btn
                purpose="swap"
                product_id={result.item.data && items._id}
                swappee_id={result.item.data && items.user_id}
                SwappeeProductName={result.item.data && items.name}
                swappeeProductdesc={result.item.data && items.description}
                swappeeProductImage={result.item.data && items.image}
                swappeeProductCity={result.item.data && items.city}
              />
            </div>
            </product>
          ))
        ) : (
          <h1>Empty Basket</h1>
        )}
      </div>
    </ProductCard>
  );
};

const ProductCard = styled.div`
  .product_container {
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 25px;
    //padding: 10px;

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

export default Card;
