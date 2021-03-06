import React from "react";
import PropTypes from "prop-types";
import { createTheme, makeStyles, ThemeProvider } from "@material-ui/core";

const useGlobalStyles = makeStyles({
  "@global": {
    body: {
      height: "100vh",
    },
  },
});

const theme = createTheme({
  palette: {
    primary: {
      main: "#0C326F",
      light: "#1351B4",
      blue300: "#5992ED",
      blue100: "#B5CFF7",
    },
    neutral: {
      grey900: "#171823",
      grey800: "#1A202C",
      grey700: "#2D3748",
      grey600: "#4A5568",
      greY500: "#718096",
      grey400: "#A0AEC0",
      grey300: "#CBD5E0",
      grey200: "#E2E8F0",
      grey100: "#EDF2F7",
      grey50: "#F7FAFC",
    },
    success: {
      main: "#168821",
    },
    error: {
      main: "#E60000",
    },
    shades: {
      light: "#FFF",
      dark: "#000",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Poppins", "sans-serif"].join(","),
    color: "#0C326F",
    // fontWeightLight: 300,
    // fontWeightRegular: 400,
    // fontWeightMedium: 500,
    // fontWeightBold: 700,
    // h1: {
    //   fontWeight: 400,
    //   fontSize: "6rem",
    //   lineHeight: "72px",
    // },
    // h2: {
    //   fontWeight: 400,
    //   fontSize: "3.75rem",
    // },
    // h3: {
    //   fontWeight: 300,
    //   fontSize: "3rem",
    // },
    // h4: {
    //   fontWeight: 300,
    //   fontSize: "2.12rem",
    // },
  },
});

function MuiThemeProvider({ children }) {
  useGlobalStyles();
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

MuiThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default MuiThemeProvider;
