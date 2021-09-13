import * as React from "react";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Login from "./pages/Login";

export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Login />
    </ThemeProvider>
  );
}
