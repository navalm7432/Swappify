import express from "express";
import Swap from "../../models/Swap.js";
import auth from "../../middleware/auth.js";

const router = express.Router();

//@routes  Post api/swapreq
//@desc   making requesting to swap to owner
//@access  private

router.post("/", auth, async (req, res) => {
  const { swapper, swappee, swapperProduct, swappeeProduct } = req.body;
  try {
    const newSwap = new Swap({
      swapper,
      swappee,
      swapperProduct,
      swappeeProduct,
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
export default router;
