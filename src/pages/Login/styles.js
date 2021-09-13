import styled from "styled-components";
import MuiGrid from "@material-ui/core/Grid";

export const StyledGridContainer = styled(MuiGrid).attrs((props) => ({
  container: true,
}))`
  height: 100% !important;
`;

export const StyledGridItem = styled(MuiGrid).attrs((props) => ({
  item: true,
}))``;

export const StyledGridItemContainer = styled(MuiGrid).attrs((props) => ({
  container: true,
  item: true,
}))``;
