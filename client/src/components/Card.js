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
  const res = result.item.data.filter((items) => items.user_id !== user_id);

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
        {result.item.data.length !== 0 ? (
          res.map((items) => (
            <div className="product">
              <img src={product} alt="" />
              <div className="detail">
                <h4>{items.name}</h4>
                <p> {items.description} </p>
              </div>
              <Btn
                purpose="swap"
                id={items.id}
                Name={items.name}
                desc={items.description}
              />
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
  .product_container {
    box-sizing: border-box;
    margin-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 5px;
    padding: 10px;

    .product {
      border: 1px solid black;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      padding: 10px;
      border-radius: 8px;
      .detail {
        height: 100px;
        width: 100%;
        display: flex;
        flex-direction: column;
        // align-items: center;
      }
    }
    .product > img {
      width: 100%;
      object-fit: contain;
      border: 1px solid black;
    }
  }
`;

export default Card;
