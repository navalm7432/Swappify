import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL || "elktrobeast@gmail.com", // TODO: your gmail account
    pass: process.env.PASSWORD || "navalm7432*", // TODO: your gmail password
  },
});

//@routes  POST api/request
//@desc    send mail about the product swap request
//@access  public

router.post("/", (req, res) => {
  //  sending mail of alert:- item is been added
  const purpose = req.body.purpose;
  if (purpose === "swapreq") {
    var mailOptions = {
      from: "elktrobeast@gmail.com", // TODO: email sender
      to: "navaljain7432@gmail.com", // TODO: email receiver
      subject: `There is a request to swap your product`,
      text: `
          Please log in to website to see.
          Thank You!
          Happy Swapping!!
          `,
    };
  }
  if (purpose === "accept") {
    var mailOptions = {
      from: "elktrobeast@gmail.com", // TODO: email sender
      to: "navaljain7432@gmail.com", // TODO: email receiver
      subject: `Your request for swapping has been accepted,`,
      text: `
      Soon your trade will be compledted.
      More info will be shared by our delivery partner.
      Thank You!
      Happy Swapping!!`,
    };
  }

  if (purpose === "reject") {
    var mailOptions = {
      from: "elktrobeast@gmail.com", // TODO: email sender
      to: "navaljain7432@gmail.com", // TODO: email receiver
      subject: `Your request for swapping has been rejected,`,
      text: `
     Sorry to inform you that your request to swap your product was rejected by the owner of requested product,
      Please visit the website to swap with other product,
      Thank You!
      Happy Swapping!!`,
    };
  }

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent!!!");
    }
  });

  res.status(200).send(req.body);
});

// for contact

router.post("/contact", (req, res) => {
  //  sending mail of alert:- item is been added
  let mailOptions = {
    from: "elktrobeast@gmail.com", // TODO: email sender
    to: "navaljain7432@gmail.com", // TODO: email receiver
    subject: `Message from website user`,
    text: `
        Product Details:-
        name: ${req.body.name}
        email: ${req.body.email}
        name: ${req.body.number}
        name: ${req.body.message}
        `,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Email sent!!!");
    }
  });

  res.status(200).send(req.body);
});

export default router;
