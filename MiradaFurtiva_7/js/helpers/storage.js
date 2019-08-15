import firebase from "./config.js";

export const storage = firebase
    .storage()
    .ref()
    .child("miradas");

export async function uploadPhoto(name, photo, container, bar, advance) {
    let upload = storage.child(name).put(photo);

    await upload.on(
        "state_changed",
        snapshot => {
            let progress = Math.floor(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );

            //console.log(progress);
            container.classList.remove("d-none");
            bar.style.width = `${progress}%`;
            advance.innerHTML = `<b>${progress}%</b>`;
        },
        err => {
            advance.classList.add("bg-danger", "text-white", "p-3");
            advance.innerHTML = `
        Error al subir el archivo: ${err.code} - ${err.message}
      `;
            setTimeout(() => {
                advance.classList.remove("bg-danger", "text-white", "p-3");
                advance.innerHTML = "";
                container.classList.add("d-none");
            }, 5000);
        },
        () => {
            container.classList.add("d-none");
            bar.style.width = `0%`;
            advance.innerHTML = `0%`;
        }
    );

    return upload;
}

export async function deletePhoto(photoURL) {
    return await firebase
        .storage()
        .refFromURL(photoURL)
        .delete()
        .then(() => ({
            code: "success",
            msg: "Fotografía eliminada con éxito"
        }))
        .catch(err => err);
}


/* document.addEventListener("click", e => {
   
    if (e.target.matches(".delete")) {
        //alert('Delete');
        let key = e.target.parentElement.parentElement.id,
            deleteId = confirm(`¿Estás seguro de eliminar el id ${key}?`);
        if (deleteId) {
            refAlimentos.child(key).remove();
        } else {
            return;
        }
    }
}); */