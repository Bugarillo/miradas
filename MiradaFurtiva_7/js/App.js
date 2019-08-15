import {
  html
} from "./helpers/templateRender.js";
import Header from "./components/Header.js";
import Jumbotron from "./components/Jumbotron.js"


async function App(user = null, page = Home) {
  return html `
    ${Jumbotron()}
    ${Header(user)} ${await page()}
  `;
}

export default App;