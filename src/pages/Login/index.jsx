import React from "react";
import Default from "../../templates/Default";
import MuiContainer from "@material-ui/core/Container";
import MuiGrid from "@material-ui/core/Grid";

function Login() {
  return (
    <Default>
      <MuiContainer>
        <MuiGrid container>
          <MuiGrid item xs={7} container></MuiGrid>
          <MuiGrid item xs={5} container></MuiGrid>
        </MuiGrid>
      </MuiContainer>
    </Default>
  );
}

export default Login;
