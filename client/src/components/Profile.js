import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";
import ErrorMessage from "./ErrorMessage";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state);
  const [error, setError] = useState();
  const [edit, setEdit] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleClick = () => history.push("/loginpopup");

  const handleEdit = () => {
    if (edit) {
      setEdit(false);
    } else {
      setEdit(true);
    }
  };
  const handleSave = async () => {
    let data = {
      name: name,
      email: email,
      current_email: result.auth.user && result.auth.user.email,
    };

    try {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
        dispatch({
          type: "AUTH_ERROR",
        });
      }
      const config = {
        headers: {
          "Content-type": "application/json",
          x_auth_token: token,
        },
      };

      const user = await axios.post(
        "http://localhost:4000/api/users/update",
        data,
        config
      );
      if (user.data) {
        dispatch({
          type: "UPDATE_SUCCESS",
          payload:user.data
        });
      }
    } catch (e) {
      e.response && setError(e.response.data.msg);
    }
    setEdit(false);
  };
  const logOut = () => {
    dispatch({
      type: "LOGOUT_SUCCESS",
    });
  };

  return (
    <Container>
      <Picture>
        <img src="images/people.svg" alt="" />
        <Text>
          <h3>Hello {result.auth.user && result.auth.user.name},</h3>
          <p>
            This is your profile page. You can edit your profile and update your
            progress.
          </p>
        </Text>
      </Picture>

      <Detail>
        <User>
          <h4>My Account</h4>
          {error && (
            <ErrorMessage
              eMessage={error}
              clearError={() => setError(undefined)}
            />
          )}
          {/* Detail area */}
          {!edit ? (
            //  edit = false
            <Field>
              <label>Name</label>
              <span>{result.auth.user && result.auth.user.name}</span>
              <label>Email</label>
              <span>{result.auth.user && result.auth.user.email}</span>
            </Field>
          ) : (
            //  edit = true
            <Field>
              {" "}
              <label>Name</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <label>Email</label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Field>
          )}
          {/* Buttons area */}
          {result.auth.user && result.auth.user ? (
            <>
              {edit ? (
                <>
                  <button onClick={handleEdit}>Cancel</button>
                  <button onClick={handleSave}>Save</button>
                </>
              ) : (
                <button onClick={handleEdit}>Edit</button>
              )}
              <button onClick={logOut}>Logout</button>
            </>
          ) : (
            <button onClick={handleClick}>LogIn</button>
          )}
        </User>
        <EditProfile>Hello</EditProfile>
      </Detail>
    </Container>
  );
};

const Container = styled.div``;

const Picture = styled.div`
  img {
    width: 100%;
    height: 100vh;
    background-color: rgb(138, 43, 226);
    padding-top: 70px;
  }
`;

const Text = styled.div`
  h3 {
    margin-top: -540px;
    margin-bottom: -5px;
    color: #fff;
    font-size: 50px;
    margin-left: 90px;
  }
  p {
    width: 230px;
    text-align: left;
    margin-left: 90px;
    color: darkgray;
    font-size: 20px;
  }
`;

const Detail = styled.div`
  display: flex;
  width: 80%;
  //   height: 350px;
  margin-top: 10rem;
`;

const User = styled.div`
  flex: 0.8;
  margin-left: 90px;
  padding-bottom: 50px;
  background-color: rgb(71, 122, 252);
  font-size: 30px;
  border-radius: 5px;
  button {
    padding: 10px 20px;
    margin-left: 20px;
    border-radius: 5px;
    border: none;
    background-color: #7f00ff;
    color: #fff;
    cursor: pointer;
  }
  h4 {
    margin-left: 20px;
    margin-top: 12px;
    font-size: 25px;
    text-decoration: underline;
    font-family: sans-serif;
    font-style: normal;
    font-weight: 600;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  label {
    font-size: 20px;
    margin-left: 20px;
    color: rgba(0, 0, 0, 0.63);

    margin-bottom: 10px;
    margin-top: 10px;
  }
  input:placeholder {
    color: black;
  }
  input {
    color: black;
    font-size: 15px;
    margin: 0px 10px;
    border-color: rgb(138, 43, 226);
    background: transparent;
    padding: 10px 10px;
    border-radius: 4px;
    outline: none;
  }
`;

const EditProfile = styled.div`
  flex: 0.2;
`;

export default Profile;
