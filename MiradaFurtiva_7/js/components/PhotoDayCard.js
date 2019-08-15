import {
  html
} from "../helpers/templateRender.js";
import ProfileBox from "./ProfileBox.js";


function PhotoDayCard(data) {
  return html `

  <div class="border" style="width: 100%">
    <div class="font-150 text-left pl-3 pb-2">Foto del día: <b>"${data.mirada}"</b></div>
      <img src="${data.photo}" class="card-img-top" alt="${data.mirada}">
       <div class="card-body d-flex">
          <div>
            <div class="font-175 bg-dark text-center px-4">${data.date.slice(8)}</div>
            <div class="text-center border text-center">JUNIO</div>
          </div>
          <div class="card-text pl-3 no-gutters" style="width: 100%">
            <p> ${data.description}</p>
            <p class="font-90">Categoría: <b>${data.category}</b> </p>
          </div>
        </div>
  

  <div class="col-lg-12">
        <hr>
        <h4 class="pl-2">Comentarios</h4>
        <hr>
  </div>
      <div class="col-lg-12 d-flex">
        <div class="" id="fotoUsuario">
          <img src="" class="rounded-circle"   alt="">
        </div>
        <form class="col-lg-11">
          <div class="form-group">
            <div class="col-md-12">
              <textarea class="form-control" id="comentario" name="message"
                placeholder="Escribe un comentario por favor" maxlength="255" required></textarea>
              <button type="submit" class="btn bg-secondary text-white mt-2">Enviar</button>
            </div>
          </div>
        </form>
      </div>
      
  </div>
  </div>
  <hr>
`;
}

export default PhotoDayCard;