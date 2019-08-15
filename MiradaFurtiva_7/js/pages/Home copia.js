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




async function Home() {
  let cards = "";

  await getMiradas()
    .then(data => {

      data.forEach(snapshot => {
        cards += html `      
          <article
            class = "col-12 col-sm-12 o col-lg-4 col-md-6 d-flex pb-2" >
            ${MiradaCard(snapshot.val())}
          </article>
        `;
      });
    })
    .catch(err => Messages(err));
  return html `


<div id="" class="container">
  <div class="row">
     <article class="col-lg-4 col-md-4 col-sm-12 pt-5 pr-4"> 
      ${Wellcome()}
    </article>
    <article class="col-lg-8 col-md-8 col-sm-12 py-5 border-left">
      ${PhotoDayCard()}
    </article>
  </div>
</div>



${Selektor()}
${Month()}
    <section id="miradas" class="container">
      <div class="row">
        ${cards}
      </div>
    </section>
 ${Footer()}   
  `;
}

export default Home;