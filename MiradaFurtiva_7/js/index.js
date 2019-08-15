import firebase from "./helpers/config.js";
import Router from "./Router.js";
import "./helpers/events.js";

window.addEventListener("hashchange", Router);
document.addEventListener("DOMContentLoaded", Router);
/* firebase.auth().onAuthStateChanged(async function (user) {
  await Router()
}); */
firebase.auth().onAuthStateChanged(async user => await Router());