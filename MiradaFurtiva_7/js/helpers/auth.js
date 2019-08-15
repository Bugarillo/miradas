import firebase from "./config.js";

const provider = new firebase.auth.GoogleAuthProvider();

firebase
    .auth()
    .onAuthStateChanged(user =>
        localStorage.setItem("userSession", JSON.stringify(user))
    );

export const signIn = () =>
    firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => (location.hash = "#/")); //redirecciona al home

export const signOut = () =>
    firebase
    .auth()
    .signOut()
    .then(() => (location.hash = "#/")); //redirecciona al home