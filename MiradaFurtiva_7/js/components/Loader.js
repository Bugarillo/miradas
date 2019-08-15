import {
    html
} from "../helpers/templateRender.js";

function Loader() {
    return html`
    <div id="progress-container" class="from-group text-center d-none">
        <div class="progress">
            <div 
                id="progress-bar" 
                class="progress-bar gb-info progress-bar-stripet progress-bar-animated"
                role="progressbar" 
                aria-valuenow="0" 
                arial-valuemin="0" 
                aria-valuemax="100" 
                style="width: 50%"
            ></div>
        </div>
        <p id="progress-advance" class="lead"><b>50%</b></p>    
    </div>
    `;
}

export default Loader;