import React, { useEffect } from "react";
import Modal from "./ProductModal";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import "./Product.css";
import product from "../Utility/product.jpg";
import Btn from "./Btn";

function MyAd() {
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
    <div className="app">
      <Modal />
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

export default MyAd;
