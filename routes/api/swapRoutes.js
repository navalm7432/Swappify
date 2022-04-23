import express from "express";
import Swap from "../../models/Swap.js";
import auth from "../../middleware/auth.js";
import Items from "../../models/Items.js";

const router = express.Router();

//@routes  Post api/swapreq
//@desc   making requesting to swap to owner
//@access  private

router.post("/", auth, async (req, res) => {
  console.log(req.body);
  const {
    swapper,
    swapperProduct,
    swapperProductName,
    swapperProductImage,
    swapperProductDesc,
    swappee,
    swappeeProduct,
    SwappeeProductName,
    swappeeProductImage,
    swappeeProductdesc,
  } = req.body;
  try {
    const newSwap = new Swap({
      swapper,
      swapperProduct,
      swapperProductName,
      swapperProductImage,
      swapperProductDesc,
      swappee,
      swappeeProduct,
      SwappeeProductName,
      swappeeProductImage,
      swappeeProductdesc,
      isSwapping: true,
      isSwapped: false,
      isCancel: false,
    });

    const savedSwap = await newSwap.save();
    if (!savedSwap)
      res.status(400).json({ msg: "Something went wrong making the request" });

    res.status(200).json("Swap Req created");
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

//@routes  Get api/swapreq
//@desc   getting requests
//@access  private

router.get("/", (req, res) => {
  Swap.find((err, data) => {
    // fetching all contents in Swap collection
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

//@routes  Update api/swapreq/accept
//@desc    update a item from item collection
//@access  Private

router.post("/accept", async (req, res) => {
  const { swappeeProductName, swapperProductName,id } = req.body;
  Items.findOneAndUpdate(
    { name: swappeeProductName },
    { isSwapping: false, isSwapped: true },
    (error, data) => {
      if (error) {
        res.status(500).json({ mssg: error.message });
      }
    }
  );
  Items.findOneAndUpdate(
    { name: swapperProductName },
    { isSwapping: false, isSwapped: true },
    (error, data) => {
      if (error) {
        res.status(500).json({ mssg: error.message });
      }
    }
  );

  Swap.findOneAndUpdate(
    { _id: id },
    { isSwapping: false, isSwapped: true },
    (error, data) => {
      if (error) {
        res.status(500).json({ mssg: error.message });
      }
    }
  );




});

//@routes  Update api/swapreq/reject
//@desc    update a item from item collection
//@access  Private

router.post("/reject", async (req, res) => {
  const { swappeeProductName, swapperProductName, id } = req.body;
  Items.findOneAndUpdate(
    { name: swappeeProductName },
    { isSwapping: false, isSwapped: false },
    (error, data) => {
      if (error) {
        res.status(500).json({ mssg: error.message });
      }
    }
  );
  Items.findOneAndUpdate(
    { name: swapperProductName },
    { isSwapping: false, isSwapped: false },
    (error, data) => {
      if (error) {
        res.status(500).json({ mssg: error.message });
      }
    }
  );

  // deleting

  Swap.findById(id, (err, data) => {
    // fetching particular content in item collection by unique id
    if (err) {
      // if found remove else send no such item
      res.status(404).send("No such item found");
    } else {
      res.status(200).json(data);
      data.remove(); // removing the fetched content from collection
    }
  });

  //
});

//@routes  DELETE api/swapreq/delete
//@desc    delete a item from item collection
//@access  Private

export default router;
