import {
    html
} from "../helpers/templateRender.js";
import {
    getMiradas
} from "../helpers/db.js";
import Messages from "./Messages.js";

async function MiradaAdminTable() {
    let miradas = "";

    await getMiradas()
        .then(data => {
            let index = 1;

            data.forEach(snapshot => {
                let mirada = snapshot.val(),
                    key = snapshot.key;

                miradas += html `
                <tr>
                    <th scope="row">${index}</th>
                    <td>${mirada.date}</td>
                    <td>${mirada.mirada}</td>
                    <td>${mirada.category}</td>
                    <td>${mirada.description}</td>
                    <td><i class="fas fa-eye" data-key="${key}"></i></td>
                    <td><i class="fas fa-pen" data-key="${key}"></i></td>
                    <td><i class="fas fa-trash" data-key="${key}"></i></td>
                </tr>
                `;

                index++;
            });
        })
        .catch(err => Messages(err));

    return html `
        <div class="table-responsive">
            <table class="table table-hover">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Mirada/título</th>
                        <th scope="col">Categoría</th>
                        <th scope="col">Comentario</th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    ${miradas}
                </tbody>
            </table>
        </div>
    `;
}

document.addEventListener("click", e => {
    if (e.target.matches(".fa-eye")) {
        alert("ver");
    }

    if (e.target.matches(".fa-pen")) {
        location.hash = `/editar-mirada/${e.target.dataset.key}`;
    }
    if (e.target.matches(".fa-trash")) {

        let key = `${e.target.dataset.key}`,
            deleteId = confirm(`¿Estás seguro de eliminar el id ${key}?`);
        if (deleteId) {
            db.child(key).remove();
        } else {
            return;
        }
    }
});

export default MiradaAdminTable;