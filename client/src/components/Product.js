import React, { useEffect, useState } from "react";
import Modal from "./Modal";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import "./Product.css";
import product from "../Utility/product.jpg";
import Btn from "./Btn";

function Product() {
  const result = useSelector((state) => state);
  const dispatch = useDispatch();
  const [object, useObject] = useState([
    { name: "bat", description: "Up for sale" },
    { name: "ball", description: "This ball was signed by MS Dhoni" },
    { name: "ball", description: "This ball was signed by MS Dhoni" },
    { name: "ball", description: "This ball was signed by MS Dhoni" },
    { name: "ball", description: "This ball was signed by MS Dhoni" },
  ]);
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
              <Btn Name={items.name} desc={items.description}/>
            </div>
          ))
        ) : (
          <h1>Empty Basket</h1>
        )}
      </div>
    </div>
  );
}

export default Product;
