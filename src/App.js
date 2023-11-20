import React, { useEffect, useRef, useState } from "react";
import "./components/some.css";
import { makeStyles } from "@material-ui/core/styles";
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { CssBaseline } from "@material-ui/core";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ExperiencePage from "./pages/ExperiencePage";
import ProjectsPage from "./pages/ProjectsPage";
import Footer from "./components/Footer";
import SplashScreen from "./pages/SplashScreen";
import Cursor from "./components/Cursor";

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

const useStyles = makeStyles((theme) => ({
  Container: {
    height: "100%",
    width: "100%",
    padding: "0px 30px",
    boxSizing: "border-box",
    [theme.breakpoints.down("xs")]: {
      padding: "0px 30px",
      alignItems: "left",
    },
  },
  innerContainer: {
    height: "100%",
  },
}));

function App() {
  const classes = useStyles();
  const refs = {
    aboutRef: useRef(null),
    experienceRef: useRef(null),
    projectsRef: useRef(null),
    contactRef: useRef(null), // Create a ref using useRef
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
  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <SplashScreen />
      ) : (
        <div className="animationNowFades" style={{ height: "100%" }}>
          <CssBaseline />
          <Cursor/>
          <div className={classes.Container}>
            <div className={classes.innerContainer}>
              <section>
                <HomePage ScrollIntoView={ScrollIntoView} />
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
                <Footer refs={refs.contactRef} />
              </section>
            </div>
          </div>
        </div>
      )}
    </ThemeProvider>
  );
}
export default App;
