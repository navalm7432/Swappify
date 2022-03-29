import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Profile = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state);
  const handleClick = () => history.push("/loginpopup");

  const [edit, setEdit] = useState(false);

  console.log(result);
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
          {!edit ? (
            <Field>
              <label>Name</label>
              <span>{result.auth.user &&result.auth.user.name}</span>
              <label>Email</label>
              <span>{result.auth.user &&result.auth.user.email}</span>
              <label>Contact</label>
              <span>No Contact found</span>
            </Field>
          ) : (
            <Field>
              {" "}
              <label>Name</label>
              <input />
              <label>Email</label>
              <input />
              <label>Contact</label>
              <input />
            </Field>
          )}
          {result.auth.user && result.auth.user ? (
            <button onClick={logOut}>Logout</button>
          ) : (
            <button onClick={handleClick}>LogIn</button>
          )}
          {/* <button onClick={logOut}>Logout</button> */}
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
  height: 350px;
  margin-top: 10rem;
`;

const User = styled.div`
  flex: 0.8;
  margin-left: 90px;
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
  input {
    color: black;
    font-size: 10px;
    margin: 0px 10px;
    border-color: rgb(138, 43, 226);
    background: transparent;
    padding: 10px 10px;
    border-radius: 4px;
    color: transparent;
    outline: none;
  }
`;

const EditProfile = styled.div`
  flex: 0.2;
`;

export default Profile;
