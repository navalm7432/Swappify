import React, {useState} from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import axios from "axios";

const AddProduct = () => {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState({});
  const [desc, setDesc] = React.useState({});

  const [addLine, setAddLine] = React.useState({});
  const [city, setCity] = React.useState({});
  const [state, setState] = React.useState({});
  const [code, setCode] = React.useState();

  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const onChange = (e) => {
    setItem(e.target.value);
  };
  const onChangeDescription = (e) => {
    setDesc(e.target.value);
  };

  const onChangeAddLine = (e) => {
    setAddLine(e.target.value);
  };
  const onChangeCity = (e) => {
    setCity(e.target.value);
  };
  const onChangeState = (e) => {
    setState(e.target.value);
  };
  const onChangeCode = (e) => {
    setCode(parseInt(e.target.value, 10));
  };

  const onSubmit = () => {
    const Item = {
      name: item,
      description: desc,
      addressLine1: addLine,
      city: city,
      state: state,
      pincode: code,
    };
    const token = localStorage.getItem("auth-token");
    const config = {
      headers: {
        "Content-type": "application/json",
        "x-auth-token": token,
      },
    };
    axios.post("http://localhost:4000/api/items", Item, config).then((res) => {
      dispatch({
        type: "IS_EMPTY",
        payload: false,
      });
      console.log(res);
      dispatch({
        type: "ADD_ITEM",
        payload: res.data,
      });
    });
    setOpen(false);
  };
  return (
    <Summary>
      <Category>
        <h3>Please Choose Category</h3>
        <Content>
          <div className="catBox">
            <Wrap>
              <button>Car</button>
            </Wrap>
          </div>

          <div className="catBox">
            <Wrap>
              <button>Electronics</button>
            </Wrap>
          </div>

          <div className="catBox">
            <Wrap>
              <button>Furniture</button>
            </Wrap>
          </div>

          <div className="catBox">
            <Wrap>
              <button>Books</button>
            </Wrap>
          </div>

          <div className="catBox">
            <Wrap>
              <button>Fashion</button>
            </Wrap>
          </div>
        </Content>

        <h3>Please add required details: </h3>

        <Form>
          <Div_1>
            <label>Product Name: </label>
            <input type="text" placeholder="Please add your product name" onChange={onChange}/>

            <label>Product Description: </label>
            <input
              type="text"
              placeholder="Please add your product description"
              className="desp"
              onChange={onChangeDescription}
            />

            {/* <label>Swap Requirement: </label>
            <input
              type="text"
              placeholder="Please add your product swap requiremnet"
            /> */}

            {/* <label> Email address: </label>
            <input
              type="text"
              placeholder="Please add your product description"
              className="desp"
            /> */}

            <label>Address </label>
            <input
              type="text"
              placeholder="Address Line 1*"
              className="line"
              onChange={onChangeAddLine}
            />
            <input
              type="text"
              placeholder="City*"
              className="line"
              onChange={onChangeCity}
            />
            <input
              type="text"
              placeholder="State*"
              className="line"
              onChange={onChangeState}
            />
            <input
              type="text"
              placeholder="Pin Code*"
              className="line"
              onChange={onChangeCode}
            />

            <input type="file" name="picture" />
            <button type="submit" onClick={onSubmit}>Submit</button>
          </Div_1>

          <Div_2>
            <img src="images/fp.svg" alt="" />
          </Div_2>
        </Form>
      </Category>
    </Summary>
  );
};

const Summary = styled.div`
  padding: 0 0 10px 10px;
  margin: 10px 10px 10px 20px;
  /* background-color: #333333; */
`;

const Category = styled.div`
  h3 {
    margin-top: 70px;
    font-size: 30px;
    color: purple;
  }

  button {
    padding: 10px 20px;
    margin-left: 20px;
    border-radius: 5px;
    border: none;
    background-color: #7f00ff;
    color: #fff;
    cursor: pointer;
  }
`;

const Content = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-around;
  margin-left: -10px;
  align-items: center;
`;

const Wrap = styled.div`
  button {
    border: 2px solid #df70ff;
    font-size: 20px;
    padding: 24px 70px;
    text-align: center;
    border-radius: 10px;
    background-color: #fbfaf5;
    color: #7f00ff;
    cursor: pointer;

    &:focus {
      background-color: #ffe5ff;
      color: purple;
      border: 1px solid #df70ff;
    }
  }
`;

const Form = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 60px;
`;

const Div_1 = styled.div`
  flex: 0.5;

  label {
    font-size: 15px;
    margin-left: 20px;
    text-align: left;
    //margin-right: 570px;
  }

  input {
    width: 100%;
    height: 40px;
    border-radius: 4px;
    padding: 12px 20px;
    border: 1px solid #ccc;
    display: block;
    margin-bottom: 20px;
    margin-top: 20px;
    margin-left: 15px;
  }

  .desp {
    height: 70px;
  }

  input [type="radio"] {
    width: 10px;
    height: 10px;
  }

  .options {
    padding: 10px 20px;
    font-size: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-left: 20px;
    margin-right: 400px;
    margin-bottom: 20px;
  }
`;

const Div_2 = styled.div`
  flex: 0.5;

  img {
    margin-top: -160px;
    width: 750px;
    height: 750px;
  }
`;

export default AddProduct;
