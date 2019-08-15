import {
  html
} from "../helpers/templateRender.js";
import MiradaForm from "../components/MiradaForm.js";
import {
  storage,
  uploadPhoto,
  deletePhoto
} from "../helpers/storage.js";
import {
  saveMirada,
  getMirada
} from "../helpers/db.js";
import Messages from "../components/Messages.js";

async function AddMirada() {
  let key = location.hash.slice(15),
    mirada = await getMirada(key);

  const props = {
    id: "edit-mirada",
    name: "Guardar cambios",
    data: mirada
  };

  return html `
    ${MiradaForm(props)}
    <div id="messages"></div>
  `;
}

document.addEventListener("submit", async e => {
  if (e.target.matches("#edit-mirada")) {
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
          form.currentPhoto.value : idPhoto + "_" + file.name
      },
      messages = document.getElementById("messages");

    //console.log(form.mphoto.files);

    if (file && file.type.match("image.*")) {
      let deleteCurrentPhoto = await deletePhoto(form.currentPhoto.value);

      if (deleteCurrentPhoto.code !== "success") {
        messages.innerHTML = Messages({
          err: true,
          msg: "Ocurrió un error al eliminar la fotografía anterior"
        });
        $("#modal-messages").modal("show");
        return false;
      }

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
          msg: "Ocurrió un error al subir la fotografía"
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
    let res = await saveMirada("update", data, form.key.value);
    messages.innerHTML = Messages(res);
    $("#modal-messages").modal("show");
    location.hash = "#/admin";
    location.reload();
  }
});

export default AddMirada;