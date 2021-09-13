import * as React from "react";
import { createTheme } from "@material-ui/core";
import Login from "./pages/Login";
import MuiThemeProvider from "./theme";

export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

export default function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Login />
    </MuiThemeProvider>
  );
}
