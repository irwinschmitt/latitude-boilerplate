import styled from "styled-components";
import MuiButton from "@material-ui/core/Button";
import MuiBox from "@material-ui/core/Box";

export const StyledButton = styled(MuiButton).attrs((props) => ({
  variant: props.variant ?? "contained",
  disableElevation: true,
  color: props.color ?? "primary",
}))`
  border-radius: 100px;
`;

export const StyledBox = styled(MuiBox).attrs((props) => ({
  px: 4,
}))``;
