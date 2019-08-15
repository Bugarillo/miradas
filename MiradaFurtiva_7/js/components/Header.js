import { html } from "../helpers/templateRender.js";
import Logo from "./Logo.js";
import Menu from "./Menu.js";

function Header(user) {
  return html`
    <div class=" bg-dark">
        <nav class=" container navbar navbar-expand-lg-md-sm navbar-dark bg-dark" id="top">
        ${Logo()} ${Menu(user)}
        </nav>
    </div>
  `;
}

export default Header;