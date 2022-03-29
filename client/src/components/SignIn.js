import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const SignIn = (props) => {
  const history = useHistory();
  // const handleClick = () => history.push("/home");

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    const data = {
      name: name,
      email: email,
      password: password,
    };
    try {
      const user = await axios.post("http://localhost:4000/api/users", data);
      console.log(user);
      localStorage.setItem("auth-token", user.data.token);
      dispatch({
        type: "REGISTER_SUCCESS",
        payload: user.data,
      });
      history.push("/home");
    } catch (e) {
      e.response && setError(e.response.data.msg);
    }
  };

  return (
    <Content>
      
      <Box>
        <Img>
          <img src="images/signin1.svg" alt="" />
        </Img>
        <Field>
          <h3>Sign In</h3>
          {error && (
        <ErrorMessage eMessage={error} clearError={() => setError(undefined)} />
      )}
          <label>Name</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="Enter Name"
            required
          />
          <label>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="text"
            placeholder="Enter Email"
            required
          />
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="text"
            placeholder="Enter Password"
            required
          />
          <button onClick={onSubmit}>Register</button>
        </Field>
      </Box>
    </Content>
  );
};

const Content = styled.div`
background-color: rgb(138, 43, 226);
height:100vh;
`;

const Box = styled.div`
  display: flex;
`;

const Img = styled.div`
  flex: 0.5;
  img {
    height: 80vh;
    margin-top: 50px;
  }
`;

const Field = styled.div`
  flex: 0.5;
  h3 {
    text-align: center;
    font-size: 30px;
    margin-top: 60px;
    margin-bottom: 60px;
    color:white;
    text-decoration:underline;
  }
  label {
    color:white;
    font-size: 20px;
    margin-left: 30px;
    font-weight: 600;
    padding: 10px 12px;
  }
  input {
    border:none;
    outline:none;
    height: 50px;
    width: 80%;
    margin-left: 40px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    margin-bottom: 25px;
  }
  button {
    margin-top: 30px;
    margin-left: 240px;
    padding: 17px 50px;
    border-radius: 4px;
    border: none;
    background-color: #7f00ff;
    color: #fff;
    cursor: pointer;
  }
`;

export default SignIn;
