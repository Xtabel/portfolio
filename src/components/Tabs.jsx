import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Box, Tab, Tabs, useMediaQuery, useTheme } from "@mui/material";



const myRoles = [
    {
        id: 1,
        company: 'Sidmach Technologies Nigeria Limited',
        jobTitle: 'Software Engineer and Lead Product Designer',
        period: 'April 2021 - Present',
        roles: ['Led the product design team and worked as a front-end engineer to develop an e-Study application to serve students preparing for the WASSCE examinations in West Africa.', ' Developed Admin portal for the NYSC SAED Headquarters Department using React JS and Material UI, and consumed API for the portal. Used React- Redux to manage the state of the application.', ' Designed and developed a website for a skilling initiative with PayStack Integration in partnership with Microsoft which served more than 300 applicants.', ' Worked in a diverse agile team of software developers, designers and software analysts on delivering a digital solution for an HMO client that serves over 2000 users.']
    },
    {
        id: 2,
        company: 'Buy Provisions NG',
        jobTitle: 'Product Designer & Graphics Designer',
        period: 'December 2020- March 2021',
        roles: [' Recognized for delivering impactful designs tailored to social media marketing campaigns, receiving commendations and recommendations for creating visually compelling assets that enhance brand engagement and user interaction.', 'Led content creation initiatives, collaborating closely with a team of digital marketers to strategically advertise products to our target market. This involved not only creating compelling visuals but also ensuring seamless integration and functionality across various digital platforms, fostering an intuitive user experience.']
    },
    {
        id: 3,
        company: 'New Horizons Nigeria Limited',
        jobTitle: 'Website Designer & Graphics Designer Intern',
        period: 'January 2019- September 2019',
        roles: ["Developed and designed monthly email templates, ensuring consistent and visually appealing communication with clients and stakeholders.", "Designed and crafted website templates, contributing to the enhancement of the company's online platform, focusing on user-friendly interfaces and engaging user experiences.", "Produced impactful posters for company advertisements, employing strategic visual elements to effectively promote products and services.","Efficiently managed database and certificate administration for customers during internship tenure."]
    }
]
const theme = createTheme({
    palette: {
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
    components: {
        MuiTab: {
            styleOverrides: {
                root: {
                    textAlign: 'left',
                    alignItems: "flex-start",
                    "&.Mui-selected": {
                        backgroundColor: "#CC5F70",
                        color: "white",
                    },
                },
                wrapper: {
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    textAlign: "left !important",
                },
                textColorInherit: {
                    "&.Mui-selected": {
                        backgroundColor: "#CC5F70",
                        color: "white",
                    },
                },
            },
        },
    },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    // const muiTheme = useTheme();
    // const mobileScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

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
                    {children}
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
const VerticalTabs = () => {
    const [value, setValue] = React.useState(0);
    const muiTheme = useTheme();
    const mobileScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    flexGrow: 1,
                    backgroundColor: theme.palette.background.paper,

                    display: "flex",
                    height: "fit-content",
                    textAlign: "left",
                    justifyContent: "flex-start",
                    [theme.breakpoints.down("sm")]: {
                        display: "block",
                    },
                }}
            >
                <Tabs
                    orientation={mobileScreen ? "horizontal" : "vertical"}
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    scrollButtons
                    allowScrollButtonsMobile={mobileScreen ? true : false}
                    aria-label="Vertical tabs example"
                    sx={{
                        borderRight: `1px solid ${theme.palette.divider}`,
                        textAlign: "left",
                        justifyContent: "flex-start",
                        alignContent: "flex-start",
                        alignItems: "flex-start",
                        alignSelf: "flex-start",
                        ...mobileScreen && {
                            display: "block",
                            borderRight: "none",
                        }
                    }}
                >
                    <Tab label="Sidmach Technologies Nigeria Limited" {...a11yProps(0)} wrapped sx={{ ...mobileScreen && { width: '60%' } }} />
                    <Tab label="Buy Provisions NG" {...a11yProps(1)} wrapped sx={{ ...mobileScreen && { width: '60%' } }} />
                    <Tab label="New Horizon System Solution Limited" {...a11yProps(2)} wrapped sx={{ ...mobileScreen && { width: '60%' } }} />
                </Tabs>
                {myRoles.map(item => (
                    <TabPanel key={item.id} value={value} index={item.id - 1}>
                        <h3>{item.jobTitle}</h3>
                        <h4 style={{ fontWeight: "500" }}>{item.period}</h4>
                        <ul
                            style={{
                                width: "600px",
                                marginLeft: "20px",
                                ...(mobileScreen && {
                                    width: "100%",
                                    marginLeft: "0px",
                                }),
                            }}
                        >
                            {item.roles.map((item, i) => (
                                <li key={i} style={{
                                    marginTop: "12px",
                                    listStyle: "circle",
                                    textAlign: "justify",
                                }}>{item}</li>
                            ))}
                        </ul>
                    </TabPanel>
                ))}
            </Box>
        </ThemeProvider>
    );
};

export default VerticalTabs;
