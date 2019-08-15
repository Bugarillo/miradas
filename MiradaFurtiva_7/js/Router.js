import "https://cdn.jsdelivr.net/npm/bs-custom-file-input/dist/bs-custom-file-input.min.js";
import App from "./App.js";
import Home from "./pages/Home.js";
import Admin from "./pages/Admin.js";
import AddMirada from "./pages/AddMirada.js";
import EditMirada from "./pages/EditMirada.js"
import Error404 from "./pages/Error404.js";

async function Router() {
  const root = document.getElementById("root");

  let route = location.hash,
    user = firebase.auth().currentUser;

  if (
    route === "#/" ||
    route === "" ||
    route === "#/top" ||
    route === "#/entrar" ||
    route === "#/salir"
  ) {
    root.innerHTML = await App(user, Home);
  } else if (route === "#/admin") {
    root.innerHTML = await App(user, Admin);
  } else if (route === "#/agregar-mirada") {
    root.innerHTML = await App(user, AddMirada)
    bsCustomFileInput.init();
  } else if (route.includes("#/editar-mirada")) {
    root.innerHTML = await App(user, EditMirada)
    bsCustomFileInput.init();

  } else {
    root.innerHTML = await App(user, Error404);
  }
}

export default Router;