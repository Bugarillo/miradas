import {
  html
} from "../helpers/templateRender.js";

function Wellcome() {
  return html `

  <div id="" class="container">
    <div class="row">
      <article class="col-12"> 
        <h2 class="pb-"><b>¡Bienvenidos!</b></h2>
        <p class="font-130">
          El proyecto <b>"Mirada furtiva"</b>, es un ejercicio fotográfico que consiste en capturar imágenes día con día
          con ayuda de un dispositivo móvil, con la intención de observar el entorno y registar cosas ordinarias para
          llevarlas a un plano estético.
        </p>
        <p class="font-130">
          Estamos rodeados de una contaminación visual al grado que nuestro cerebro, en un acto de asepsia, descarta la
          mayoría de los estímulos y presta atención a quellos que le son realmente significativos a su universo de
          intereses, dejando fuera a los pequeños detalles: el arte urbano que se esconde detrás de un poste, a la flor en
          un jardín olvidado, a la forma de las nubes, a la sombra en la banqueta, en fin, a esos pequeños detalles que
          nos acompañan en nuestra vida cotidiana.
        </p>
        <div class="pt-4" style="width: 100%">
          <div class="font-150 text-left pl-3 pb-2">Entradas</div>
            <div class="border-top border-bottom">
              <ul class="text-color: gray">
                <li class="pt-3 font-110">Junio</li>
              </ul>
            </div>
        </div>
      </article>
    </div>
  </div>

`;
}

export default Wellcome;