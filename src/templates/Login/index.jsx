import React from "react";
import Header from "../../organisms/Header";
import Footer from "../../organisms/Footer";
import MuiContainer from "@material-ui/core/Container";
import MuiGrid from "@material-ui/core/Grid";

function Login() {
  return (
    <>
      <Header />
      <MuiContainer>
        <MuiGrid container>
          <MuiGrid item xs={7} container></MuiGrid>
          <MuiGrid item xs={5} container></MuiGrid>
        </MuiGrid>
      </MuiContainer>
      <Footer />
    </>
  );
}

export default Login;
