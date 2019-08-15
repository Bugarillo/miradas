import {
  signIn,
  signOut
} from "./auth.js";

document.addEventListener("click", e => {
  if (e.target.matches("#btn-login")) signIn();

  if (e.target.matches("#btn-logout")) signOut();
});