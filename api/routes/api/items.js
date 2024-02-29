import express from "express";
import Items from "../../models/Items.js";
import auth from "../../middleware/auth.js";
import multer from "multer";

const router = express.Router();

//@routes  GET api/items
//@desc    Get all items from item collection
//@access  public

router.get("/", (req, res) => {
  Items.find((err, data) => {
    // fetching all contents in item collection
    if (err) {
      res.status(500).send(err);
    } else {
      if (Object.keys(data).length === 0) {
        res.status(200).json({ status: "empty" }); // if collection is empty then send status empty
      } else {
        res.status(200).send(data); // else set status ok and send content as reponse of request
      }
    }
  }).sort({ date: -1 });
});

//@routes  POST api/items
//@desc    Add/create a item in item collection
//@access  Private

// Storage for image uplaod
const Storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./client/public/images/productimage");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: Storage });

router.post("/", upload.single("picture"), (req, res) => {

  const newItem = new Items({
    //structure of data we will be receiving as response
    isSwapping: req.body.swapping,
    isSwapped: false,
    user_id: req.body.user_id,
    name: req.body.name,
    image: req.file.originalname,
    category: req.body.category,
    description: req.body.description,
    address: {
      addressLine1: req.body.addressLine1,
      city: req.body.city,
      state: req.body.state,
      pincode: req.body.pincode,
    },
  });
  newItem.save(); // saving the response structred according to our structure in our db
  res.status(200).send(newItem); // status = ok and send us the data we received by http req
});

//@routes  DELETE api/items/ :id
//@desc    delete a item from item collection
//@access  Private

router.delete("/:id", auth, (req, res) => {
  Items.findById(req.params.id, (err, data) => {
    // fetching particular content in item collection by unique id
    if (err) {
      // if found remove else send no such item
      res.status(404).send("No such item found");
    } else {
      res.status(200).json(data);
      data.remove(); // removing the fetched content from collection
    }
  });
});

//@routes  Update api/items/update
//@desc    update a item from item collection
//@access  Private

router.post("/update", async (req, res) => {
  const { swappeeProduct, swapperProduct } = req.body;
  Items.findOneAndUpdate(
    { _id: swappeeProduct },
    { isSwapping: true },
    (error, data) => {
      if (error) {
        res.status(500).json({ mssg: error.message });
      }
    }
  );

  Items.findOneAndUpdate(
    { _id: swapperProduct },
    { isSwapping: true },
    (error, data) => {
      if (error) {
        res.status(500).json({ mssg: error.message });
      } else {
        res.json("Both product Updated");
      }
    }
  );
});




export default router;
