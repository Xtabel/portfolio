import React from "react";
import PropTypes from "prop-types";
import {
  createTheme,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import "./some.css";
import { projectTheme } from "../styles/Theme";
import { useMediaQuery, useTheme } from "@material-ui/core";

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
  overrides: {
    MuiTab: {
      wrapper: {
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textAlign: "left",
      },
      textColorInherit: {
        "&.Mui-selected": {
          backgroundColor: projectTheme.palette.primary.main,
          color: "white",
        },
      },
    },
    "&.MuiTab-textColorInherit-Mui-selected": {
      color: "red",
      backgroundColor: "blue",
    },
  },
});

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const muiTheme = useTheme();
  const mobileScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "fit-content",
    textAlign: "left",
    justifyContent: "flex-start",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    textAlign: "left",
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "flex-start",
    alignSelf: "flex-start",
    [theme.breakpoints.down("sm")]: {
      display: "block",
    borderRight: 'none',
    },
  },
  tab: {
    backgroundColor: theme.palette.primary.main,
  },
  ulList:{
    width: "600px", marginLeft: "20px",
    [theme.breakpoints.down("sm")]: {
     width:'100%',
     marginLeft:'0px'
    },
  }
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const muiTheme = useTheme();
  const mobileScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Tabs
          orientation={mobileScreen ? "horizontal" : "vertical"}
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
        >
          <Tab label="Sidmach Technologies" {...a11yProps(0)} />
          <Tab label="Buy Provisions NG" {...a11yProps(1)} />
          <Tab label="New Horizons System Solution Limited" {...a11yProps(2)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <h3>Front-End Engineer and Product Designer</h3>
          <h4 style={{ fontWeight: "500" }}>April 2021 - Present</h4>
          <ul
            className={classes.ulList}
          >
            <li
              style={{
                marginTop: "12px",
                listStyle: "circle",
                textAlign: "justify",
              }}
            >
              Developed Admin portal for the NYSC SAED Headquarters Department
              using React JS and Material UI, and consumed API for the portal.
              Used React- Redux to manage the state of the application.
            </li>
            <li style={{ marginTop: "12px", listStyle: "circle" }}>
              Designed and developed a website for a skilling initiative with{" "}
              PayStack Integration in partnership with Microsoft which served
              more than 300 applicants.
            </li>
            <li style={{ marginTop: "12px", listStyle: "circle" }}>
              Worked in a diverse agile team of software developers, designers
              and software analysts on delivering a digital solution for an HMO
              client that serves over 2000 users.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h3>Product Designer & Graphics Designer</h3>
          <h4 style={{ fontWeight: "500" }}>December 2020- March 2021 </h4>
          <ul className={classes.ulList}>
            <li
              style={{
                marginTop: "12px",
                listStyle: "circle",
                textAlign: "justify",
              }}
            >
              Received commendations and recommendations for creating brilliant
              designs for social media marketing.
            </li>
            <li style={{ marginTop: "12px", listStyle: "circle" }}>
              Worked as a lead content creator and engaged with a team of
              digital marketers in advertising products to the target market.
            </li>
          </ul>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h3>Website Designer & Graphics Designer</h3>
          <h4 style={{ fontWeight: "500" }}>January 2019- September 2019 </h4>
          <ul className={classes.ulList}>
            <li
              style={{
                marginTop: "12px",
                listStyle: "circle",
                textAlign: "justify",
              }}
            >
              Created Monthly Email Templates
            </li>
            <li style={{ marginTop: "12px", listStyle: "circle" }}>
              Created Website Templates
            </li>
            <li style={{ marginTop: "12px", listStyle: "circle" }}>
              Created Posters for company advertisement
            </li>
          </ul>
        </TabPanel>
      </div>
    </ThemeProvider>
  );
}
