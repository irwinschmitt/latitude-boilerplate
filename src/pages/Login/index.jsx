import React from "react";
import Default from "../../templates/Default";
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import MuiTypography from "@material-ui/core/Typography";
import MuiBox from "@material-ui/core/Box";
import MuiGrid from "@material-ui/core/Grid";
import {
  StyledGridContainer,
  StyledGridItem,
  StyledGridItemContainer,
} from "./styles";

function Login() {
  const x = true;

  return (
    <Default>
      <StyledGridContainer>
        <StyledGridItem xs={7}>
          <MuiBox
            display="flex"
            height="100%"
            flexDirection="column"
            justifyContent="center"
          >
            <MuiBox mb={3}>
              <MuiTypography variant="h3" color="primary">
                <MuiBox fontWeight="bold">Bem-vindo!</MuiBox>
              </MuiTypography>
            </MuiBox>

            <MuiBox mb={3}>
              <MuiTypography variant="body1">
                O Laboratório de Recuperação de Ativos (LABRA/AGU) é uma solução
                de atuação estratégico-jurídica criada pela Portaria AGU nº 511,
                de 4 de dezembro de 2015. O LABRA/AGU atende tanto a
                Procuradoria-Geral da União (PGU) quanto a Procuradoria-Geral
                Federal (PGF) e tem em funcionamento vários mecanismos de
                pesquisa e cruzamento de dados.
              </MuiTypography>
            </MuiBox>

            <MuiBox mb={3}>
              <MuiTypography variant="body1" gutterBottom>
                A finalidade do LABRA/AGU é propiciar apoio às atividades
                finalísticas da AGU, preferencialmente no tocante à cobrança e
                recuperação de ativos, por meio da produção de conhecimento e de
                informações estratégicas destinadas a subsidiar sua atuação
                judicial, como a localização de devedores, interpostas pessoas,
                grupos econômicos informais, bens próprios e desviados,
                identificação de fraude contra credores, de fraude à execução e
                de variações patrimoniais a descoberto.
              </MuiTypography>
            </MuiBox>

            <MuiBox>
              <MuiTypography variant="body1" gutterBottom>
                Em caso de dúvidas, envie e-mail para
                pgulabra.sistemas@agu.gov.br.
              </MuiTypography>
            </MuiBox>
          </MuiBox>
        </StyledGridItem>

        <StyledGridItem xs={5}>
          <MuiBox
            display="flex"
            height="100%"
            flexDirection="column"
            justifyContent="center"
          >
            <MuiBox mb={5}>
              <MuiTypography variant="h5" color="primary" component="div">
                <MuiBox fontWeight="bold">Acesso a Intranet</MuiBox>
              </MuiTypography>
            </MuiBox>

            <MuiBox mb={1}>
              <MuiTypography variant="body1" color="primary" component="div">
                <MuiBox fontWeight="bold">Usuário</MuiBox>
              </MuiTypography>
            </MuiBox>

            <MuiBox mb={3}>
              <TextField />
            </MuiBox>

            <MuiBox mb={1}>
              <MuiTypography variant="body1" color="primary" component="div">
                <MuiBox fontWeight="bold">Senha</MuiBox>
              </MuiTypography>
            </MuiBox>

            <MuiBox mb={3}>
              <TextField />
            </MuiBox>

            <MuiBox mb={5}>
              <Button>Entrar</Button>
            </MuiBox>

            <MuiBox>
              <MuiTypography variant="body1" color="primary" component="div">
                Esqueceu a senha?
              </MuiTypography>
            </MuiBox>
          </MuiBox>
        </StyledGridItem>
      </StyledGridContainer>
    </Default>
  );
}

export default Login;
