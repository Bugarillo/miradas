import {
  html
} from "../helpers/templateRender.js";

function Menu(user) {
  let menuElements;


  if (user) {
    menuElements = html `
        <li class="nav-item">
          <a id="btn-admin" class="btn btn-apagado text-white font-weight-bold" href="/#/admin">
            Admin
          </a>
        </li>
        
        <li class="nav-item">
          <a id="btn-add" class="btn btn-apagado text-white font-weight-bold" href="/#/agregar-mirada">
            Agregar
          </a>
        </li>
        
        <li class="nav-item">
          <a id="btn-logout" class="btn btn-apagado text-white font-weight-bold" href="/#/salir">
            Salir
          </a>
        </li>
      `;

  } else {
    menuElements = html `
      <li class="nav-item">
        <a id="btn-login" class="btn btn-apagado text-white font-weight-bold" href="/#/entrar">
          Entra con Google
        </a>
      </li>
    `;
  }

  return html `
    <ul class="nav mx-auto mx-sm-0">
      ${menuElements}
    </ul>
  `;
}

export default Menu;