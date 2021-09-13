import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";
import Container from "../../atoms/Container";

function Footer() {
  return (
    <MuiAppBar elevation={0} position="static">
      <MuiToolbar>
        <Container>
          <MuiTypography variant="body2" align="center">
            Laboratório de Recuperação de Ativos (LABRA) - ADVOCACIA-GERAL DA
            UNIÃO - Todos os direitos reservados © 2021
          </MuiTypography>
        </Container>
      </MuiToolbar>
    </MuiAppBar>
  );
}

export default Footer;
