import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

function Btn({ purpose, product_id, swappee_id, Name, desc }) {
  const dispatch = useDispatch();
  const result = useSelector((state) => state);
  const data = {
    name: Name,
    description: desc,
  };
  const onSwap = () => {
    const swapData = {
      swapper: result.auth.user.id,
      swappee: swappee_id,
      swapperProduct: 112,
      swappeeProduct: product_id,
    };

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
          swapperProduct: "625576da75a65304d0c1fccd",
        },
        config
      )
      .then(() => {
        dispatch({
          type: "ITEM_UPDATED",
        });
      });
    // axios.post("http://localhost:4000/api/request", data);
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
    <div>
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
