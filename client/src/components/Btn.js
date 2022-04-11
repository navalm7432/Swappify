import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";
import { useDispatch } from "react-redux";

function Btn({ purpose, id, Name, desc }) {
  const dispatch = useDispatch();
  const data = {
    name: Name,
    description: desc,
  };
  const onClick = () => {
    axios.post("http://localhost:4000/api/request", data);
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
      .delete(`http://localhost:4000/api/items/${id}`, config)
      .then((res) => {
        console.log("Deleting");
        dispatch({
          type: "REMOVE_ITEM",
          payload: res.data._id,
        });
      });
  };

  const onEdit = () => {
    
  };

  return (
    <div>
      {purpose == "swap" ? (
        <Button variant="outlined" onClick={onClick}>
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
