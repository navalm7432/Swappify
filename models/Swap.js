import mongoose from "mongoose";

const SwapSchema = mongoose.Schema({
  swapper: {
    type: String,
    required: true,
  },
  swapperProduct: {
    type: String,
    required: true,
  },
  swapperProductName: {
    type: String,
    required: true,
  },
  swapperProductImage: {
    type: String,
    required: true,
  },
  swapperProductDesc: {
    type: String,
    required: true,
  },
  swappee: {
    type: String,
    required: true,
  },
  swappeeProduct: {
    type: String,
    required: true,
  },
  SwappeeProductName: {
    type: String,
    required: true,
  },
  swappeeProductImage: {
    type: String,
    required: true,
  },
  swappeeProductdesc: {
    type: String,
    required: true,
  },
  isSwapping: {
    type: Boolean,
    required: true,
  },
  isSwapped: {
    type: Boolean,
    required: true,
  },
  isCancel: {
    type: Boolean,
    required: true,
  },
});
export default mongoose.model("Swaps", SwapSchema); // .model("x",y) will create a new collection namely "x" using y schema in databse
