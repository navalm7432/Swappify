import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import './Btn.css'

function Btn({
  purpose,
  product_id,
  swappee_id,
  SwappeeProductName,
  swappeeProductdesc,
  swappeeProductImage,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state);
  const [res1, setRes1] = useState();

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
        setRes1(res.data);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const user_id = result.auth.user && result.auth.user.id;
  const swapperProduct =
    res1 && res1.filter((items) => items.user_id === user_id);

  const onSwap = () => {
    const swapData = {
      swapper: result.auth.user.id,
      swapperProduct: res1 && swapperProduct[0]._id,
      swapperProductName: res1 && swapperProduct[0].name,
      swapperProductImage: res1 && swapperProduct[0].image,
      swapperProductDesc: res1 && swapperProduct[0].description,
      swappee: swappee_id,
      swappeeProduct: product_id,
      SwappeeProductName,
      swappeeProductImage,
      swappeeProductdesc,
    };
    console.log(swapData);
    const token = localStorage.getItem("auth-token");
    const config = {
      headers: {
        "Content-type": "application/json",
        x_auth_token: token,
      },
    };
    axios
      .post("http://localhost:4000/api/swapreq", swapData, config)
      .then(() => {
        dispatch({
          type: "ITEM_UPDATED",
        });
      });
    axios
      .post(
        "http://localhost:4000/api/items/update",
        {
          swappeeProduct: swapData.swappeeProduct,
          swapperProduct: swapData.swapperProduct,
        },
        config
      )
      .then(() => {
        dispatch({
          type: "ITEM_UPDATED",
        });
      });

    history.push("/home");
    axios.post("http://localhost:4000/api/request", {
      ProductName: res1 && swapperProduct[0].namee,
      Description: res1 && swapperProduct[0].description,
    });
  };
  const onDelete = () => {
    const token = localStorage.getItem("auth-token");
    const config = {
      headers: {
        "Content-type": "application/json",
        x_auth_token: token,
      },
    };
    axios
      .delete(`http://localhost:4000/api/items/${product_id}`, config)
      .then((res) => {
        console.log("Deleting");
        dispatch({
          type: "REMOVE_ITEM",
          payload: res.data._id,
        });
      });
  };

  const onEdit = () => {};

  return (
    <div className="button">
      {purpose == "swap" ? (
        <Button variant="outlined" onClick={onSwap}>
          {purpose}
        </Button>
      ) : purpose == "delete" ? (
        <Button variant="outlined" aria-label="delete" onClick={onDelete}>
          {purpose}
        </Button>
      ) : (
        <Button variant="outlined" onClick={onEdit}>
          {purpose}
        </Button>
      )}
    </div>
  );
}

export default Btn;