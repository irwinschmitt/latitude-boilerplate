import * as React from "react";
import Login from "./pages/Login";
import MuiThemeProvider from "./theme";

export default function App() {
  return (
    <MuiThemeProvider>
      <Login />
    </MuiThemeProvider>
  );
}
