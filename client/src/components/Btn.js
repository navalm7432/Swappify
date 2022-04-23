import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

function Btn({
  purpose,
  product_id,
  swappee_id,
  SwappeeProductName,
  swappeeProductdesc,
  swappeeProductImage,
  swappeeProductCity,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state);
  const user_id = result.auth.user && result.auth.user.id;
  const swapperProduct =
    result.item.data &&
    result.item.data.filter((items) => items.user_id === user_id);

  console.log(result.auth.user && swapperProduct[0].address.city);
  const onSwap = () => {
    const swapData = {
      swapper: result.auth.user.id,
      swapperProduct: result.item.data && swapperProduct[0]._id,
      swapperProductName: result.item.data && swapperProduct[0].name,
      swapperProductImage: result.item.data && swapperProduct[0].image,
      swapperProductDesc: result.item.data && swapperProduct[0].description,
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
