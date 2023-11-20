import { Button, Typography, makeStyles } from "@material-ui/core";
import React from "react";
import "./some.css";

const useStyles = makeStyles((theme) => ({
  footerContainer: {
    padding: "70px 30px 50px 30px",
    width: "100%",
    backgroundColor: "transparent",
    maxWidth: "1440px",
    margin: "auto",
    borderBottom: "1px solid #1a1a1a",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
      margin: "50px 0px",
    },
  },
  footerInnerContainer: {
    display: "flex",
    justifyContent: "flex-start",
    alignSelf: "flex-start",
    marginBottom: "50px",
  },
  innerContent: {
    padding: "0px 100px",
    fontSize: "22px",
    [theme.breakpoints.down("xs")]: {
      padding: "0px",
    },
  },
}));
const Footer = ({ refs }) => {
  const classes = useStyles();

  const sendEmail = () => {
    const email = "christabelakpoguma@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink);
  };
  return (
    <div className={classes.footerContainer}>
      <div className={classes.footerInnerContainer}>
        <div
          style={{
            gap: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "70px",
              height: "10px",
              backgroundColor: "#CC5F70",
            }}
          ></div>
          <h2 style={{ fontFamily: "Alatsi, sans-serif" }}>Contact</h2>
        </div>
      </div>
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            // justifyContent: "space-evenly",
            gap: "100px",
            alignItems: "center",
          }}
          ref={refs}
        >
          <div className={classes.innerContent}>
            I love learning new things and I’m currently open to work in any
            place that challenges me to be better and helps me to collaborate
            with different IT experts around the world. Kindly reach out!
            Thanks.
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: "30px",
              }}
            >
              <Button
                onClick={sendEmail}
                color="primary"
                variant="outlined"
                style={{
                  textTransform: "inherit",
                  borderWidth: "3px",
                  fontSize: "18px",
                  padding: "10px 50px",
                }}
              >
                Send me a mail
              </Button>
            </div>
          </div>
        </div>
        <div
          style={{
            padding: "70px 20px 50px 20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {" "}
          <div>
            <Typography style={{ color: "#979797", fontWeight: 500 }}>
              Copyright © Christabel Akpoguma (2021)
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
