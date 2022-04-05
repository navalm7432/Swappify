// import React, { useState } from "react";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import Dialog from "@material-ui/core/Dialog";
// import DialogActions from "@material-ui/core/DialogActions";
// import DialogContent from "@material-ui/core/DialogContent";
// import DialogTitle from "@material-ui/core/DialogTitle";
// import { useSelector, useDispatch } from "react-redux";
// import { useHistory } from "react-router";
// import ErrorMessage from "./ErrorMessage";
// import axios from "axios";

// export default function ProductModal() {
//   const history = useHistory();
//   const [error, setError] = useState();
//   const [open, setOpen] = React.useState(false);
//   const [item, setItem] = React.useState({});
//   const [desc, setDesc] = React.useState({});
//   const [addLine, setAddLine] = React.useState({});
//   const [city, setCity] = React.useState({});
//   const [state, setState] = React.useState({});
//   const [code, setCode] = React.useState();
//   const dispatch = useDispatch();
//   const result = useSelector((state) => state);
//   console.log(result);
//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   const onChange = (e) => {
//     setItem(e.target.value);
//   };
//   const onChangeDescription = (e) => {
//     setDesc(e.target.value);
//   };

//   const onChangeAddLine = (e) => {
//     setAddLine(e.target.value);
//   };
//   const onChangeCity = (e) => {
//     setCity(e.target.value);
//   };
//   const onChangeState = (e) => {
//     setState(e.target.value);
//   };
//   const onChangeCode = (e) => {
//     setCode(parseInt(e.target.value, 10));
//   };

//   const onSubmit = () => {
//     if ((item = desc = addLine = city = state = code = null)) {
//       setError("Please fill all the Feilds");
//     } else {
//       let Item = {
//         name: item,
//         description: desc,
//         addressLine1: addLine,
//         city: city,
//         state: state,
//         pincode: code,
//       };
//       const token = localStorage.getItem("auth-token");
//       const config = {
//         headers: {
//           "Content-type": "application/json",
//           "x-auth-token": token,
//         },
//       };
//       axios
//         .post("http://localhost:4000/api/auth/verify", config)
//         .then((tokenRes) => {
//           if (tokenRes) {
//             axios
//               .post("http://localhost:4000/api/items", Item, config)
//               .then((res) => {
//                 dispatch({
//                   type: "IS_EMPTY",
//                   payload: false,
//                 });
//                 console.log(res);
//                 dispatch({
//                   type: "ADD_ITEM",
//                   payload: res.data,
//                 });
//               });
//           }
//         });

//       setOpen(false);
//       history.push("/product");
//     }
//   };

//   return (
//     <div>
//       <Button variant="outlined" color="red" onClick={handleClickOpen}>
//         Add Item
//       </Button>
//       {error && (
//         <ErrorMessage eMessage={error} clearError={() => setError(undefined)} />
//       )}
//       <Dialog
//         open={open}
//         onClose={handleClose}
//         aria-labelledby="form-dialog-title"
//         fullWidth
//       >
//         <DialogTitle id="form-dialog-title">Add Item</DialogTitle>
//         <DialogContent>
//           <TextField
//             autoFocus
//             margin="dense"
//             id="name"
//             label="Item Name :"
//             type="email"
//             fullWidth
//             onChange={onChange}
//             required
//           />
//         </DialogContent>
//         <DialogTitle id="form-dialog-title">Add Description</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="dense"
//             id="name"
//             label="Item Description :"
//             type="email"
//             fullWidth
//             onChange={onChangeDescription}
//           />
//         </DialogContent>

//         <DialogTitle id="form-dialog-title">Add Address</DialogTitle>
//         <DialogContent>
//           <TextField
//             margin="dense"
//             id="name"
//             label="Address Line"
//             type=""
//             fullWidth
//             onChange={onChangeAddLine}
//           />
//           <TextField
//             margin="dense"
//             id="name"
//             label="City"
//             type=""
//             fullWidth
//             onChange={onChangeCity}
//           />
//           <TextField
//             margin="dense"
//             id="name"
//             label="State"
//             type="name"
//             fullWidth
//             onChange={onChangeState}
//           />
//           <TextField
//             margin="dense"
//             id="name"
//             label="Pincode"
//             fullWidth
//             onChange={onChangeCode}
//           />
//         </DialogContent>

//         <DialogActions>
//           <Button onClick={handleClose} color="primary">
//             Cancel
//           </Button>
//           <Button type="submit" onClick={onSubmit} color="primary">
//             Add
//           </Button>
//         </DialogActions>
//       </Dialog>
//     </div>
//   );
// }
