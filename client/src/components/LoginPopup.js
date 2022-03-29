import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import ErrorMessage from "./ErrorMessage";

const LoginPopup = () => {
  const history = useHistory();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const handleClick = () => history.push("/signin");
  const onSubmit = () => {
    const data = {
      email: email,
      password: password,
    };
    dispatch({
      type: "USER_LOADING",
    });

    axios
      .post("http://localhost:4000/api/auth", data)
      .then((user) => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: user.data,
        });
        localStorage.setItem("auth-token", user.data.token);
        console.log(user.data);
        history.push("/home");
      })
      .catch((e) => {
        e.response.data.msg && setError(e.response.data.msg);
      });
  };

  return (
    <PopUp>
      <Box>
        <SignUp>
          <h4>Welcome to</h4>
          <h3>SWAPPIFY</h3>
          <p>SignIn to your account</p>
          <button onClick={handleClick}>Sign In</button>
        </SignUp>
        <SignIn>
         
          <h3>Create Account</h3>
          <label>Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            placeholder="Enter Email"
          />
          <label>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            placeholder="Enter Password"
          />
          {error && (
            <ErrorMessage
              eMessage={error}
              clearError={() => setError(undefined)}
            />
          )}
          <button onClick={onSubmit}>Login</button>
        </SignIn>
      </Box>
    </PopUp>
  );
};

const PopUp = styled.div`
  height: 100vh;
  padding: 60px 60px;
  background-color: rgb(138, 43, 226);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  display: flex;
  height: 80vh;
  width: 80%;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SignIn = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h3 {
    text-align: center;
    font-size: 30px;
    color: white;
  }
  label {
    font-size: 20px;
    font-weight: bold;
    padding: 10px 12px;
    color: white;
  }
  input {
    font-weigth: bold;
    border: none;
    outline: none;
    height: 40px;
    width: 500px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 15px;
    margin-bottom: 17px;
  }
  button {
    margin-top: 30px;
    padding: 12px 30px;
    border-radius: 4px;
    border: none;
    background-color: #7f00ff;
    color: white;
    cursor: pointer;
  }
`;

const SignUp = styled.div`
  flex: 0.4;
  /* margin-left: 40px;
margin-top: 180px; */
  background-color: rgb(11, 15, 230);
  h4 {
    text-align: center;
    margin-left: 20px;
    margin-top: 200px;
    font-size: 40px;
    font-weight: normal;
    color: white;
    margin-bottom: 1px;
  }
  h3 {
    text-align: center;
    margin-left: 20px;
    font-size: 45px;
    font-weight: bold;
    color: white;
    padding: 2px 2px;
    margin-top: 5px;
  }
  p {
    text-align: center;
    margin-left: 25px;
    color: lightgray;
    margin-top: 40px;
    font-size: 18px;
  }
  button {
    margin-top: 20px;
    margin-left: 170px;
    padding: 12px 30px;
    border-radius: 4px;
    border: none;
    text-align: center;
    cursor: pointer;
    color: #7f00ff;
  }
`;

export default LoginPopup;
