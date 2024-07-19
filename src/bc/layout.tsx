import React from "react";

import Menu from "@/bc/menu";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div style={{ display: "flex" }} className="bg-zinc-950 dark:bg-white">
    <Menu />
    <div style={{ flex: 1, padding: "20px" }}>{children}</div>
  </div>
);

export default Layout;
