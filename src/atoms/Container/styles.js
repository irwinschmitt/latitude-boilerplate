import styled from "styled-components";
import MuiContainer from "@material-ui/core/Container";

export const StyledContainer = styled(MuiContainer).attrs((props) => ({
  maxWidth: "lg",
}))`
  /* height: calc(100vh - 128px); */
  height: ${(props) => (props.fullHeight ? "calc(100vh - 128px)" : "inherit")};
`;
