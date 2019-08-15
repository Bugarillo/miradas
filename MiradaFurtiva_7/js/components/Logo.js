import { html } from "../helpers/templateRender.js";

function Logo() {
  return html` <!-- Hay que generar una funcion para ver el codigo como html -->

<a id="logo" class="navbar-brand mx-auto mx-sm-0" href="/#/"> <img src="../img/fotos/RGB.jpg" width="50" height="50"
    class="d-inline-block align-middle rounded-circle" alt="Ricardo Bugarín">
</a>
    `;
}

export default Logo;