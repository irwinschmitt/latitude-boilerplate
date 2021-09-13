import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import Container from "../../atoms/Container";

function Header() {
  return (
    <MuiAppBar elevation="0" position="static">
      <MuiToolbar>
        <Container>
          <MuiTypography variant="h6">
            Laboratório de Recuperação de Ativos (LABRA) - ADVOCACIA-GERAL DA
            UNIÃO
          </MuiTypography>
        </Container>
      </MuiToolbar>
    </MuiAppBar>
  );
}

export default Header;
