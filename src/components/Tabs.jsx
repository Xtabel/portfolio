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
        roles: ['Collaborated on the front-end development of the WAEC e-Study platform, while leading the UI/UX design and implementing gamification features, resulting in a 40% increase in student engagement and improved preparation effectiveness.', ' Developed Admin portal for the NYSC SAED Headquarters Department using React JS and Material UI. Used React- Redux to manage the state of the application.', ' Developed a scalable web application for the Microsoft Future Ready Program using React JS, Material UI, and Paystack, enabling seamless resource access for 300+ applicants and achieving 99% user satisfaction.', 'Built reusable component libraries and optimized API integrations, cutting front-end development time by 30% while improving UI consistency and real-time data performance by 25%.']
    },
    {
        id: 2,
        company: 'Danval Technologies',
        jobTitle: 'Front-end Engineer and Lead Product Designer (Remote) ',
        period: 'March 2024 - Present',
        roles: ['Led the design and implementation of an automated queue management system, resulting in an 80% reduction in customer wait times.', 'Streamlined customer onboarding with OAuth integration, cutting registration time and enhancing security', 'Architected and implemented dynamic user roles and permission management systems, creating intuitive front-end components for seamless role-based access control.', 'Collaborated with cross-functional teams to translate complex requirements into scalable, user-centric interfaces.']
    },
    {
        id: 3,
        company: 'Fortuna Inc.',
        jobTitle: 'Lead Front-end Engineer',
        period: 'January 2024  - June 2024 (contract)',
        roles: ['Spearheaded project setup and front-end development of design systems, creating reusable components, metrics dashboards, subscription planning features, and settings management interfaces.', 'Ensured seamless functionality through robust API integration and adherence to best practices.', 'Implemented real-time features using WebSockets, enabling instant updates and notifications to enhance user engagement and system responsiveness.']
    },
    {
        id: 4,
        company: 'Buy Provisions NG',
        jobTitle: 'Product Lead',
        period: 'December 2020 - March 2021',
        roles: ['Designed and implemented visually engaging and responsive digital interfaces that enhanced user experience', 'Led content creation initiatives, collaborating closely with a team of digital marketers to strategically advertise products to our target market. This involved creating compelling visuals and ensuring seamless integration and functionality across various digital platforms, fostering an intuitive user experience for users.']
    },
    {
        id: 5,
        company: 'New Horizons Nigeria Limited',
        jobTitle: 'Front-end Engineer Intern',
        period: 'January 2019 - September 2019',
        roles: ["Contributed to the design and implementation of interactive and user-friendly web interfaces, enhancing company communication platforms", "Efficiently managed database and certificate administration for customers during internship tenure."]
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
                    <Tab label="Danval Technologies" {...a11yProps(2)} wrapped sx={{ ...mobileScreen && { width: '60%' } }} />
                    <Tab label="Fortuna Inc." {...a11yProps(2)} wrapped sx={{ ...mobileScreen && { width: '60%' } }} />
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
