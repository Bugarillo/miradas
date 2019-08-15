import {
  html
} from "../helpers/templateRender.js";
import Loader from "./Loader.js";

function MiradaForm({
  id,
  name,
  data = null
}) {
  return html `

  <div class="container"></div>

    <form id="${id}" class="container my-5 pb-3" method="post">

        <div class="row container">

            <div class="form-group  col-md-6">
                <input type="date" class="form-control" name="mdate"
                value="${data ? data.val().date : null}"  
                require />
            </div>

            <div class="form-group col-md-6">
                <input type="text" class="form-control" name="mirada" placeholder="Título"
                value="${data ? data.val().mirada : null}" 
                require />
            </div>

            <div class="form-group col-md-12">
                <input type="text" class="form-control" name="mdescription" placeholder="Descripción" cols="20" rows="3" 
                value="${data ? data.val().description : null}" 
                require />
            </div>

          

             <div class="col-md-12">
                <select name="mcategory" 
                    class="custom-select">
                        <option value="" ${!data ? "selected" : null}>Categoría</option>
                        <option value="amigos"
                        ${data ? (data.val().category === "amigos" ? "selected" : null) : null}
                        >Amigos</option>
                        <option value="arquitectura"
                        ${ data ? (data.val().category === "arquitectura" ? "selected" : null) : null}
                        >Arquitectura</option>
                        <option value="arte"
                        ${ data ? (data.val().category === "arte" ? "selected" : null) : null}
                        >Arte</option>
                        <option value="gastronomia"
                        ${ data ? (data.val().category === "gastronomia" ? "selected" : null) : null}
                        >Gastronomía</option>
                        <option value="gente"
                        ${ data ? (data.val().category === "gente" ? "selected" : null) : null }
                        >Gente</option>
                        <option value="texturas"
                        ${ data ? (data.val().category === "texturas" ? "selected" : null) : null }
                        >Texturas</option>
                        <option value="paisaje"
                        ${ data ? (data.val().category === "paisaje" ? "selected" : null) : null}
                        >Paisaje</option>
                        <option value="varios"
                        ${ data ? (data.val().category === "varios"  ? "selected" : null) : null}
                        >Varios</option>
                    </select>
                

  
                <div class="form-group pt-3">
                    <div class="custom-file">
                        <input 
                        type="file" 
                        name="mphoto" 
                        class="custom-file-input" 
                        id="uploader"/>
                        <label class="custom-file-label" for="uploader" data-browse="Buscar">Elige la fotografía del día</label>
                    </div>
                </div>
                
                  ${data
                    ? data.val().photo
                        ? html `
                            <div class="form-group">
                                <figure>
                                    <figcaption class="text-info"><b>Fotografía actual</b></figcaption>
                                    <img src="${data.val().photo}" class="img-thumbnail"/>
                                </figure>
                                <input type="hidden" name="currentPhoto" value="${data.val().photo}"/>
                            </div>
                        `
                    : null 
                : null}
                
                ${Loader()}

                <div class="form-group pl-3">
                    <button type="submit" class="btn bg-success text-white">
                    ${name}
                    </button>
                    ${data
                        ? data.key
                            ? html`
                                <input type="hidden" name="key" value=${data.key} />
                            `
                        : null
                    : null}
                </div>
            </div>
        </form>
    </div>
    `;
}


export default MiradaForm;