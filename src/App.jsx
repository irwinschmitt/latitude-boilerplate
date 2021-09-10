import * as React from "react";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Button from "./atoms/Button";

export const theme = createTheme({
  typography: {
    fontFamily: ["Poppins"].join(","),
  },
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            Create React App v5-beta example with styled-components
          </Typography>

          <Button>Label</Button>

          <Button variant="outlined" color="secondary">
            Label
          </Button>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
