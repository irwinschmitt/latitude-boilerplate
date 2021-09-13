import React from "react";
import MuiAppBar from "@material-ui/core/AppBar";
import MuiToolbar from "@material-ui/core/Toolbar";
import MuiTypography from "@material-ui/core/Typography";

import Menu from "../../molecules/Menu";

function Header() {
  const menuItems = [
    {
      title: "Institucional",
      submenuItems: [
        {
          title: "A",
          link: "...",
        },
        {
          title: "B",
          link: "...",
        },
      ],
    },
    {
      title: "Produtos e Serviços",
      submenuItems: [
        {
          title: "C",
          link: "...",
        },
        {
          title: "D",
          link: "...",
        },
      ],
    },
  ];
  return (
    <MuiAppBar color="secondary">
      <MuiToolbar>
        <MuiTypography variant="h6">Logo</MuiTypography>

        {menuItems.map(({ title, items }) => (
          <Menu title={title} items={items} key={title} />
        ))}
      </MuiToolbar>
    </MuiAppBar>
  );
}

export default Header;
