
import React, { useState } from "react";
import "./some.css";
import { Box, Button, Typography, useTheme } from "@mui/material";
import Avatar from "../assets/Avatar";
import { Icon } from "@iconify/react";

const Footer = ({ refs, ScrollIntoView, hoverMedia }) => {
  const sendEmail = () => {
    const email = "christabelakpoguma@gmail.com";
    const mailtoLink = `mailto:${email}`;
    window.open(mailtoLink);
  };
  const [hover, setHover] = useState(false)
  const theme = useTheme();
  return (
    <Box
      sx={{
        padding: "70px 30px 50px 30px",
        width: "100%",
        backgroundColor: "transparent",
        maxWidth: "1440px",
        margin: "auto",
        borderBottom: "1px solid #1a1a1a",
        '@media (max-width:600px)': {
          padding: "0px",
          margin: "50px 0px",
        }
      }}
    >
      <Box sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignSelf: "flex-start",
        marginBottom: "20px",
        [theme.breakpoints.down("sm")]:{
          flexDirection:'column'
        }
      }} >
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
          <h2 style={{ fontFamily: "Alatsi, sans-serif" }}>Contact 🚀</h2>
        </div>
      </Box>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: '80px',
            flexWrap: 'wrap',
            gap: '60px',
         
          }}
          ref={refs}
        >
          <Box sx={{
            flex: 0.7,
            fontSize: "16px",
            '@media (max-width: 599.95px)': {
              padding: "0px",
              flex: 1,
              textAlign: 'justify',
      
            },
          }}>
            I'm excited to hear about your project ideas or answer any questions you might have. Whether it's a collaboration, a project inquiry, or just to say hello, feel free to reach out via email by clicking the button below. Looking forward to connecting!
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                paddingTop: "30px",
              }}
            >
              <Button
                onClick={sendEmail}
                color="secondary"
                variant="outlined"
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                sx={{
                  textTransform: "inherit",
                  borderWidth: "2px",
                  fontSize: "16px",
                  padding: "10px 20px",
                  transition: "0.5s ease-in-out transform",
                  '&:hover': {
                    border: `2px solid ${theme.palette.primary.main}`,
                    color: theme.palette.primary.main,
                    transform: 'translateY(-2px)'
                  }
                }}
              >
                Let's work together!
              </Button>
            </div>
          </Box>
          <Box flex={0.3} display={'flex'} justifyContent={'center'} sx={{
            '@media (max-width: 599.95px)': {
              padding: "0px",
              flex: 1,
            },
          }}>
            <Avatar hover={hover} hoverMedia={hoverMedia} />

          </Box>

        </div>
        <div
          style={{
            // padding: "70px 20px 50px 20px",
            // display: "flex",
            // justifyContent: "center",
          }}
        >
          {" "}
          <Box sx={{ width: '100%', height: '50px', display: { lg: 'flex', xs: 'none' }, alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box', position: 'relative', bottom: 0, flexWrap: 'wrap' }}>
            <Typography color="secondary" style={{ fontWeight: 500 }}>
              © Christabel Akpoguma (2021)
            </Typography>
            <ul style={{ display: 'flex', listStyle: 'none', width: '40%', justifyContent: 'space-evenly', flexWrap: 'wrap', color: "#979797", cursor: 'pointer' }}>
              <li onClick={() => ScrollIntoView('aboutRef')} className="bottom-links">About</li>
              <li onClick={() => ScrollIntoView('experienceRef')} className="bottom-links">Experience</li>
              <li onClick={() => ScrollIntoView('projectsRef')} className="bottom-links">Project</li>
              <li onClick={() => ScrollIntoView('contactRef')} className="bottom-links">Contact</li>
            </ul>
            <Button color="secondary" disableRipple style={{ fontWeight: 500, textTransform: 'inherit' }} onClick={() => ScrollIntoView('homeRef')}>
              Go back up <Icon icon="lets-icons:up" />
            </Button>
          </Box>
        </div>
      </div>
    </Box>
  );
};

export default Footer;





