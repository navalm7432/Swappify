import express from "express";
import nodemailer from 'nodemailer';

const router = express.Router();

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL || 'elktrobeast@gmail.com', // TODO: your gmail account
        pass: process.env.PASSWORD || 'nj9166897711*' // TODO: your gmail password
    }
  });

  
//@routes  POST api/request
//@desc    send mail about the product swap request
//@access  public

  router.post("/",(req, res) => {

    //  sending mail of alert:- item is been added
    let mailOptions = {
        from: 'elktrobeast@gmail.com', // TODO: email sender
        to: 'navaljain7432@gmail.com', // TODO: email receiver
        subject: `There is a request to swap your product`,
        text: `
        Product Deatils:-
        name: ${req.body.name}
        description: ${req.body.description}`
      };
    
      transporter.sendMail(mailOptions, (err, data) => {
        if (err) {
            return log('Error occurs');
        }
        return log('Email sent!!!');
      });
    
  res.status(200).send(req.body)
  });

export default router;
