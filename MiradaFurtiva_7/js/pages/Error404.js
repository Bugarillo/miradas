import {
    html
} from "../helpers/templateRender.js";

async function Error404() {
    return html `
    <main>
        <h1>Error 404</h1>
    </main>
`;
}

export default Error404;