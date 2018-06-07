import React from "react";
import { BrowserRouter as Router, withRouter } from "react-router-dom";

import Nav from "./pages/Drawer";

const MyNav = withRouter(Nav);

const NavTop = () => (
  <Router>
    <div>
      <MyNav />
    </div>
  </Router>
);

export default NavTop;
