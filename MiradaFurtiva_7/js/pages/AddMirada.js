import {
  html
} from "../helpers/templateRender.js";
import MiradaForm from "../components/MiradaForm.js";
import {
  storage,
  uploadPhoto
} from "../helpers/storage.js";
import {
  saveMirada
} from "../helpers/db.js";
import Messages from "../components/Messages.js";

async function AddMirada() {
  const props = {
    id: "add-mirada",
    name: "Agregar"
  };

  return html `
    ${MiradaForm(props)}
    <div id="messages"></div>
  `;
}

document.addEventListener("submit", async e => {
  if (e.target.matches("#add-mirada")) {
    //alert("Funciona");
    e.preventDefault();

    let form = e.target,
      file = form.mphoto.files[0],
      idPhoto = new Date().getTime(),
      data = {
        mirada: form.mirada.value,
        date: form.mdate.value,
        description: form.mdescription.value,
        category: form.mcategory.value,
        photo:
          !file || !file.type.match("image.*") ?
          "img/logo.png" : idPhoto + "_" + file.name
      },
      messages = document.getElementById("messages");

    //console.log(form.mphoto.files);

    if (file && file.type.match("image.*")) {
      let photoName = `${new Date().getTime()}_${file.name}`;

      let upload = await uploadPhoto(
        photoName,
        file,
        document.getElementById("progress-container"),
        document.getElementById("progress-bar"),
        document.getElementById("progress-advance")
      );

      //console.log(upload);
      if (upload.state === "success") {
        let photoURL = await storage
          .child(photoName)
          .getDownloadURL()
          .then(url => url)
          .catch(err => err);

        console.log(photoURL);
        data.photo = photoURL;
      } else {
        messages.innerHTML = Messages({
          err: true,
          msg: "Ocurrió un error al subir la foto"
        });
        $("#modal-messages").modal("show");
        return false;
      }
    } else if (file && !file.type.match("image.*")) {
      messages.innerHTML = Messages({
        err: true,
        msg: "El archivo que tratas de subir no es una imagen"
      });
      $("#modal-messages").modal("show");
      return false;
    }

    //Salvamos la info en la BD
    //console.log(data);
    let res = await saveMirada("add", data);
    messages.innerHTML = Messages(res);
    $("#modal-messages").modal("show");
    form.reset();
  }
});

export default AddMirada;