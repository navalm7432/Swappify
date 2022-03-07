import express from "express";
import Items from "../../models/Items.js";
import auth from "../../middleware/auth.js";

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

router.post("/", (req, res) => {
  console.log(req.body);
  const newItem = new Items({
    //structure of data we will be receiving as response
    name: req.body.name,
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

  //  sending mail of alert:- item is been added
});

//@routes  DELETE api/items
//@desc    delete a item from item collection
//@access  Private

router.delete("/:id", (req, res) => {
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

export default router;
