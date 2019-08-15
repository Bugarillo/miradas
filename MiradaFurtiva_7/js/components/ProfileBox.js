import {
    html
} from "../helpers/templateRender.js"

function ProfileBox() {
    const user = JSON.parse(localStorage.getItem("userSession"));

    return html `
    <main class="py-4">
        <article class="row align-items-center text-center">
            <div class="col-12 col-md-3 text-md-right">
                <img class="rounded-circle" 
                style="width: 64px; height: 64px;"
                src="${user.photoURL}"
                alt="${user.displayName}"
                >
           </div>
           <div class="col-12 col-md-9 text-md-left pt-4">
               <p class="lead">
                   ¡Hola <b>${user.displayName}</b>!
                   <br/>
                   Aquí puedes editar el proyecto <b>"Mirada Furtiva"</b>
               </p>
           </div>
        </article>
    </main>
    `
}

export default ProfileBox;