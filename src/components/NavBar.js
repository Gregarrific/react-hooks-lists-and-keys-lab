import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const navs = links.map((link) => {
    return <a key={link} href={'#' + link}>{link}</a>;
  })
  return (<nav>
    {navs}
  </nav>);
}

export default NavBar;
