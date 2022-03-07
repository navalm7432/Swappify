import React from "react";
import Button from "@material-ui/core/Button";
import axios from "axios";

function Btn({ Name, desc }) {
  const data = {
    name: Name,
    description: desc,
  };

  const onClick = () => {
    axios.post("http://localhost:4000/api/request", data);
  };

  return (
    <div>
      <Button variant="outlined" onClick={onClick}>
        Swap
      </Button>
    </div>
  );
}

export default Btn;
