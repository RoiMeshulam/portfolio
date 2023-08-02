import React, { useState, useRef } from "react";
import {
  
  createTheme,
  ThemeProvider,
  Box,
  TextField,
  TextareaAutosize,
  Button,
} from "@mui/material";
import { styled } from "@mui/system";
import emailjs from "emailjs-com";

const FlatButton = styled(Button)`
  color: #ffd700;
  font-size: 13px;
  font-weight: 400;
  letter-spacing: 2px;
  font-family: sans-serif;
  text-decoration: none;
  padding: 10px 18px;
  border: 1px solid #ffd700;
  margin-top: 25px;
  float: left;
  animation: fadeInAnimation 1s 1.8s backwards;
  white-space: nowrap;

  &:hover {
    background: #ffd700;
    color: #333;
  }
`;



const theme = createTheme(); 

const Fields = () => {
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !subject || !email || !message) {
      console.log("Please fill in all fields.");
      return;
    }

    // Add your EmailJS service ID, template ID, and user ID
    const serviceId = "service_7c0dd5q";
    const templateId = "template_86hk5b7";
    const userId = "1edC30pBub_ODNDiK";

    // Construct the template parameters
    const templateParams = {
      from_name: name,
      subject: subject,
      email: email,
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully!", response);
        // Perform any desired actions upon successful email submission
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Handle any error that occurs during email submission
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <form onSubmit={sendEmail}>
        <Box
          display="flex"
          justifyContent="center"
          width="80%"
          flexDirection="column"
          marginLeft="8%"
          marginTop="5%"
        >
          <Box display="flex" justifyContent="center">
            <TextField
              name="name"
              label="Name"
              variant="outlined"
              sx={{ marginRight: "1%" }}
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              name="subject"
              label="Subject"
              variant="outlined"
              value={subject}
              onChange={handleSubjectChange}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="90%"
            margin="0 auto"
            marginTop={"1%"}
          >
            <TextField
              name="email"
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={handleEmailChange}
            />
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            width="90%"
            margin="0 auto"
            marginTop={"1%"}
          >
            <TextareaAutosize
              name="message"
              label="Email Message"
              rows={8}
              aria-label="Email Message"
              style={{
                width: "100%",
                padding: "10px",
                resize: "vertical",
                backgroundColor: "#424242",
                borderColor: "black",
                borderWidth: 1,
                color: "black",
              }}
              value={message}
              onChange={handleMessageChange}
            />
          </Box>
          <Box display={"flex"} justifyContent={"center"}>
            <FlatButton type="submit">Send Mail</FlatButton>
          </Box>
        </Box>
      </form>
    </ThemeProvider>
  );
};

export default Fields;
