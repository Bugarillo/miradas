import {
  html
} from "../helpers/templateRender.js";
import ProfileBox from "../components/ProfileBox.js";
import MiradaAdminTable from "../components/MiradaAdminTable.js";

async function Admin() {
  return html `
    <main>
      <section class="container user-info">
        ${ProfileBox()} ${await MiradaAdminTable()}
      </section>
    </main>
  `;
}

export default Admin;