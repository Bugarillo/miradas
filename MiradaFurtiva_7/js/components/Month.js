import {
  html
} from "../helpers/templateRender.js";

function Month(data) {
  return html `
    <div class="container">
      <div class="pt-5 pl-3">
        <h3>Mes: <b>${data.date.slice(5,7)}</b></h3>
      </div>
    </div>
  `;
}

export default Month;

//.toLocaleString("en", { month: "long"  })