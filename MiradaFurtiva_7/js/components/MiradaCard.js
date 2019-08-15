import {
  html
} from "../helpers/templateRender.js";



function MiradaCard(data) {
  return html `

       
    <div class="card border">

     <div>
        <div class="font-175 bg-dark text-center px-3 col-3">${data.date.slice(8)}</div>
      </div>

      <img src="${data.photo}" class="card-img-top pt-2" alt="${data.mirada}">

      <div class="card-body">
        <h5 class="card-title">"${data.mirada}"</h5>
        <p class="card-text">${data.description}</p>
        <p class="font-90">Categoría: <b>${data.category}</b> </p>
      </div>
      
    </div>
   
    `;
}

export default MiradaCard;