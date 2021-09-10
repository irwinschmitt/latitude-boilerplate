import * as React from "react";
import {ThemeProvider} from '@material-ui/core/styles';
import theme from './theme'
import { Button } from '@material-ui/core';

export default function App() {
  return (
    // <React.StrictMode>
      <ThemeProvider theme={theme}>
        <Button>Hello world</Button>
        <h1>Esse é um teste H1</h1>
        <h2>Esse é um teste H2</h2>
        <h3>Esse é um teste H3</h3>
        <h4>Esse é um teste H4</h4>
        
      </ThemeProvider>
      
    // </React.StrictMode>
  );
}
