
const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

// Serve static files from the "public" directory
app.use(express.static('public'));

// Handle form submission
app.post('/submit', (req, res) => {
  // Extract the submitted data
  const confession = req.body.confession;

  // Create a transporter using SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 587,
    auth: {
      user: 'bestestthabo@gmail.com',
      pass: 'Aseningiyekele1!'
    }
  });

  // Configure the email message
  const mailOptions = {
    from: 'bestestthabo@gmail.com',
    to: 'socials@confessionseswatini.com',
    subject: 'New Confession',
    text: confession
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('An error occurred while sending the email.');
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Confession submitted successfully.');
    }
  });
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});