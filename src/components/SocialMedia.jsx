import { ThemeProvider } from "@mui/system";
import { styled } from "@mui/system";
import { Icon } from "@iconify/react";
import '../styles/SocialMedia.scss';

const theme = {
  palette: {
    primary: {
      main: "#CC5F70",
    },
    secondary: {
      main: "#263238",
    },
  },
};

const SocialMediaContainer = styled('div')({
  width: "40px",
  position: "fixed",
  bottom: "0px",
  right: "10px",
  zIndex: "10",
  color: theme.palette.secondary.main,
  '@media (max-width: 960px)': {
    justifyContent: "end",
    display: "flex",
    width: "100%",
    bottom: "0px",
    zIndex: "50",
    position: "fixed",
    backgroundColor: "#fff",
    right: 0,
  },
});

const UnorderedList = styled('ul')(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  webkitBoxAlign: "center",
  alignItems: "center",
  margin: "0px",
  padding: "0px",
  position: "relative",
  left: "auto",
  right: "20px",
  boxSizing: "inherit",
  listStyle: "none",
  '@media (max-width: 960px)': {
    justifyContent: "center",
    left: "auto",
    right: "20px",
    margin: "0px",
    display: "flex",
    flexDirection: "row",
  },
  "&::after": {
    content: '" "',
    display: "block",
    width: "1px",
    height: "90px",
    margin: "0px auto",
    backgroundColor: theme.palette.secondary.main,
    '@media (max-width: 960px)': {
      height: "0px",
    },
  },

  "& li": {
    alignContent: "right",
    alignSelf: "right",
    display: "listItem",
    textAlign: "-webkit-match-parent",
    fontSize: "20px",
    transition: "0.2s all ease-in-out",
    "&:hover": {
      color: theme.palette.primary.main,
      cursor: "pointer",
      transition: "0.2s all ease-in-out",
      transform: "translateY(-4px)",
    },
  },

  "& a": {
    padding: "10px",
    display: "inline-block",
    textDecoration: "none",
    textDecorationSkipInk: "auto",
    color: "inherit",
    position: "relative",
    transition: "var(--transition)",
  },
}));

const SocialMedia = ({ hover }) => {
  return (
    <ThemeProvider theme={theme}>
      <SocialMediaContainer orientation="right">
        <UnorderedList onMouseOver={hover} onMouseLeave={hover}>
          <li>
            <a
              href="http://www.linkedin.com/in/christabel-akpoguma"

              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="eva:linkedin-outline" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Xtabel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="codicon:github-alt" />
            </a>
          </li>
          <li>
            <a
              href="mailto:christabelakpoguma@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="bx:bxl-gmail" />
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/@christabelakpoguma"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon icon="iconoir:medium" />
            </a>
          </li>
        </UnorderedList>
      </SocialMediaContainer>
    </ThemeProvider>
  );
};

export default SocialMedia;
