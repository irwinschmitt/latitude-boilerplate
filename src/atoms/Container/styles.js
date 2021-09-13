import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";

export const StyledContainer = styled(MuiContainer).attrs((props) => ({
  maxWidth: "lg",
}))`
  min-height: 100% !important;
`;
