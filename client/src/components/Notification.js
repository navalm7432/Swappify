import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import axios from "axios";

function Notification() {
  const history = useHistory();
  const dispatch = useDispatch();
  const result = useSelector((state) => state);
  const user_id = result.auth.user && result.auth.user.id;
  const res = result.swap.data.filter(
    (items) => items.swappee === user_id || items.swapper === user_id
  );
  console.log(res);
  useEffect(() => {
    axios.get("http://localhost:4000/api/swapreq").then((res) => {
      if (res.data.status === "empty") {
        dispatch({
          type: "SWAP_IS_EMPTY",
          payload: true,
        });
      } else {
        dispatch({
          type: "LOADING_SWAPS",
        });
        dispatch({
          type: "GET_SWAPS",
          payload: res.data,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Div>
      <Div1>
        {result.swap.data.length !== 0 && res.length !== 0 ? (
          res.map((items) => (
            <Container>
              {/* {result.item.data.filter((data)=>(data._id===res.swapperProduct))} */}
              <Box>
                <div className="swapperProduct_box">
                  <img
                    src={`images/productImage/${items.swapperProductImage}`}
                    alt=""
                  />
                  <div className="detail">
                    <h4>{items.swapperProductName}</h4>
                    <p> {items.swapperProductDesc} </p>
                  </div>
                </div>
              </Box>
              <img src="images/exchange.png" alt="" />
              <Box>
                <div className="swappeeroduct_box">
                  <img
                    src={`images/productImage/${items.swappeeProductImage}`}
                    alt=""
                  />
                  <div className="detail">
                    <h4>{items.SwappeeProductName}</h4>
                    <p> {items.swappeeProductdesc} </p>
                  </div>
                </div>
              </Box>
              {items.isSwapped === false ? (
                <Action>
                  {user_id === items.swappee ? (
                    <button
                      onClick={() => {
                        axios.post("http://localhost:4000/api/swapreq/accept", {
                          swapperProductName: items.swapperProductName,
                          swappeeProductName:
                            result.swap.data && items.SwappeeProductName,
                          id: result.swap.data && items._id,
                        });

                        history.push("/home");

                        axios.post("http://localhost:4000/api/request", {
                          purpose: "accept",
                        });
                      }}
                    >
                      Accept
                    </button>
                  ) : null}
                  <button
                    onClick={() => {
                      axios.post("http://localhost:4000/api/swapreq/reject", {
                        swapperProductName: items.swapperProductName,
                        swappeeProductName:
                          result.swap.data && items.SwappeeProductName,
                        id: result.swap.data && items._id,
                      });
                      history.push("/home");
                      axios.post("http://localhost:4000/api/request", {
                        purpose: "reject",
                      });
                    }}
                  >
                    Reject
                  </button>
                </Action>
              ) : (
                <>
                  <h3>Trade in Progress</h3>
                  <button
                    onClick={() => {
                      axios.post("http://localhost:4000/api/swapreq/reject", {
                        swapperProductName: items.swapperProductName,
                        swappeeProductName:
                          result.swap.data && items.SwappeeProductName,
                        id: result.swap.data && items._id,
                      });
                      history.push("/home");
                    }}
                  >
                    Reject
                  </button>
                </>
              )}
            </Container>
          ))
        ) : (
          <h1>"No request found😔 ...."</h1>
        )}
      </Div1>
      <Div2>
        <img src="images/notif.svg" alt="" />
      </Div2>
    </Div>
  );
}

const Div = styled.div`
  padding-top: 100px;
  padding-left: 10px;
  padding-right: 10px;
  background-color: none;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  // flex: 0.8;
`;
const Action = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 20px;

  button {
    width: 80px;
    height: 40px;
    background-color: none;
    margin: 10px;
    border: 1px solid black;
    border-radius: 10px;
    cursor: pointer;
  }
`;
const Div1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: center;

  h1 {
    text-align: center;
    color: #6c63ff;
    font-size: 50px;
  }

  /* h4{
    margin-top: -50px;
    text-align: left;
  } */
`;
const Container = styled.div`
  height: 420px;
  width: 100%;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 5px;
  box-sizing: border-box;
  border-bottom: 3px solid black;
  border-radius: 8px;
  padding: 5px;
  img {
    object-fit: contain;
    height: 100px;
  }
  h3 {
    margin-left: 20px;
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
  }
  button {
    cursor: pointer;
    width: 80px;
    height: 40px;
    background-color: none;
    margin: 10px;
    border: 1px solid black;
    border-radius: 10px;
  }
`;
const Div2 = styled.div`
  // flex: 0.2;
  img {
    width: 800px;
    height: 600px;
    margin-right: 30px;
  }
`;
const Box = styled.div`
  width: 295px;
  height: 370px;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  img {
    width: 280px;
    height: 220px;
  }
`;

export default Notification;
