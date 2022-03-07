import mongoose from "mongoose";

// creating Schema (or structure) for the data to be saved in mongo db
const ItemSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  address: {
    addressLine1: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    pincode: {
      type: Number,
      required: true,
    },
  },
});

export default mongoose.model("item", ItemSchema); // .model("x",y) == will create a new collection namely "x" using y schema in databse
