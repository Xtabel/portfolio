import React, { useEffect, useRef, useState } from "react";
import "./components/some.css";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";
import SplashScreen from "./pages/SplashScreen";
import Cursor from "./components/Cursor";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";


const theme = createTheme({
  palette: {
    // type: 'dark',
    primary: {
      main: "#CC5F70",
    },
    secondary: {
      main: "#263238",
    },
    background: {
      default: "#fff",
    },
  },
});



function App() {
  const refs = {
    homeRef: useRef(null),
    aboutRef: useRef(null),
    experienceRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null),
  };

  const ScrollIntoView = (refId) => {
    const targetRef = refs[refId];
    if (targetRef && targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, [6000]);
  }, []);
  const [hoverMedia, setHoverMedia] = useState(false);
  const handleHoverMedia = (e) => {
    debugger
    if (e.type === "mouseover") {
      setHoverMedia(true);
    } else if (e.type === 'mouseleave') {
      setHoverMedia(false)
    }
  }
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="animationNowFades" style={{ height: "100%" }}>
          <CssBaseline />
          <Cursor />
          <Box sx={{
            height: "100%",
            width: "100%",
            padding: "0px 30px",
            boxSizing: "border-box",
            alignItems: { xs: 'left' }
          }}>
            <div style={{ height: "100%", }}>
              <section>
                <HomePage refs={refs.homeRef} ScrollIntoView={ScrollIntoView} handleHoverMedia={handleHoverMedia} />
              </section>
              <section>
                <AboutPage refs={refs.aboutRef} />
              </section>
              <section>
                <ExperiencePage refs={refs.experienceRef} />
              </section>
              <section>
                <ProjectsPage refs={refs.projectsRef} />
              </section>
              <section>
                <Footer refs={refs.contactRef} ScrollIntoView={ScrollIntoView} hoverMedia={hoverMedia} />
              </section>
            </div>
          </Box>
        </div>
      )}
    </ThemeProvider>
  );
}
export default App;
