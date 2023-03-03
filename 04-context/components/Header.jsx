import React, { Component } from "react";
import ThemeContext from "./themeContext";
class Header extends Component {
    static contextType = ThemeContext
  render() {
    // console.log(this.context);
    const theme = this.context
    return (
      <header className={`${theme}-theme`}>
        <h2>{theme === "light" ? "Light" : "Dark"}</h2>
      </header>
    );
  }
}
// /Header.contextType = ThemeContext;

export default Header;
