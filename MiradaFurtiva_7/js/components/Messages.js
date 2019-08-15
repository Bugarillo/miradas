import {
    html
} from "../helpers/templateRender.js";

function Messages({
    err,
    msg
}) {
    let alert = err ? "alert-danger" : " alert-success";

    return html `
    <div
      id="modal-messages"
      class="modal fade"
      tabindex="-1"
      role="dialog"
      aria-labelledby="myModal"
      aria-hidden="true"
    >
      <div class="modal-dialog  modal-dialog-centered" role="document">
        <div class="modal-content">
          <div class="alert ${alert} mb-0 h1 text-center" role="alert">
            ${msg}
          </div>
        </div>
      </div>
    </div>
  `;
}

export default Messages;