import {
  html
} from "../helpers/templateRender.js";
import {
  getMiradas
} from "../helpers/db.js";
import Selektor from "../components/Selektor.js/";
import Wellcome from "../components/Wellcome.js";
import MiradaCard from "../components/MiradaCard.js";
import Footer from "../components/Footer.js";
import Month from "../components/Month.js";
import PhotoDayCard from "../components/PhotoDayCard.js";
import Messages from "../components/Messages.js";

//Se que el método reverse sirve para invertir el orden de los elementos, pienso que  puede ser: cards.reverse();
//Pero dónde lo ubico para que las cards se desplieguen en orden inverso?

async function Home() {
  let cards, dayCard, month = "";

  await getMiradas()
    .then(data => {

      data.forEach(snapshot => {
        cards += html `      
          <article
            class = "col-sm-12 col-lg-4 col-md-6 d-flex pb-2" >
            ${MiradaCard(snapshot.val())}
          </article>
        `;
      });

      data.forEach(snapshot => {
        dayCard = html `
          <article
            class = "col-lg-11 d-flex pb-2" >
            ${PhotoDayCard(snapshot.val())}
          </article>
        `;
      });

      data.forEach(snapshot => {
        month = html `
        <article
        class="col-lg-12">
          ${Month(snapshot.val())}
        </article>
        `;
      });
    })

    .catch(err => Messages(err));
  return html `

<!-- Al poner el snapshot del dayCard (que es la foto del día) Me esta provocando un UNDEFINED en la página. Se encuentra bien colocado o lo tengo que ubicar en otra parte para eliminar la indefinición?-->


<div id="" class="container">
  <div class="row">
     <article class="col-lg-4 col-md-4 col-sm-12 pt-5 pr-4"> 
      ${Wellcome()}
    </article>

    <article class="col-lg-8 col-md-8 col-sm-12 py-5 border-left">
    <div class="row">
      ${dayCard}
      </div>
    </article>
  </div>
</div>

${Selektor()}


<article class="col-lg-12 pb-3">
    <div class="row">
      ${month}
      </div>
    </article>

    <section id="miradas" class="container border">
      <div class="row">
        ${cards}
      </div>
    </section>
 ${Footer()}   
  `;
}

export default Home;