import React from "react";
import { useSelector,useDispatch } from "react-redux";
import "./Model.css";
export const Modal = () => {
  // close the modal when clicking outside the modal.
  const dispatch = useDispatch();
const result = useSelector((state) => state);

const closeModal = (e) => {
  e.preventDefault()
  dispatch({ type: "IS_MODAL_ACTION",payload:false});
  console.log("close");
};


  //render the modal JSX in the portal div.
  return (
    <div className="container11"  >
      <div className="modal">
        <h3>Sign Up</h3>
        <div className="SignIn">
          <label className="Label">Email: </label>
          <input
            className="input"
            type="text"
            placeholder="Please enter email address"
          />
          <label className="Label">Password: </label>
          <input
            className="input"
            type="text"
            placeholder="Please enter your password"
          />
          <label className="Label">Confirm Password: </label>
          <input
            className="input"
            type="text"
            placeholder="Please confirm your password"
          />
          <button className="button_SignIn">Sign Up</button>
          <p>Already have an account?</p>
          <button className="signin">SignIn</button>
        </div>

        <button className="close" onClick={closeModal}>
          X
        </button>
      </div>
    </div>
  );
};
