import express from "express";
import User from "../../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import config from "config";
import auth from "../../middleware/auth.js";

const router = express.Router();

//@routes  Post api/users
//@desc   Register new user
//@access  public

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  //simple validation
  if (!name || !email || !password)
    return res.status(400).json({ msg: "Please Enter all fields" });

  //check if user already exist
  try {
    const user = await User.findOne({ email });
    if (user) res.status(400).json({ msg: "User already exists" });

    const salt = await bcrypt.genSalt(10);
    if (!salt)
      res.status(400).json({ msg: "Something went wrong with bcrypt" });

    const hash = await bcrypt.hash(password, salt);
    if (!hash)
      res
        .status(400)
        .json({ msg: "Something went wrong hashing the password" });

    const newUser = new User({
      name,
      email,
      password: hash,
    });

    const savedUser = await newUser.save();
    if (!savedUser)
      res.status(400).json({ msg: "Something went wrong saving the user" });

    const token = jwt.sign({ id: savedUser._id }, config.get("jwtSecret"));

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email,
      },
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

//@routes  Post api/users/update
//@desc   Update existing user
//@access  private

router.post("/update", auth, async (req, res) => {
  const { name, email, current_email } = req.body;
  User.findOneAndUpdate(
    { email: current_email },
    { name: name, email: email },
    (error, data) => {
      if (error) {
        res.status(500).json({ mssg: error.message });
      } else {
        res.json({
          id: data.id,
          name: data.name,
          email: data.email,
        });
      }
    }
  );
});

export default router;
