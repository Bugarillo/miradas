import firebase from "./config.js";

export const db = firebase.database().ref("miradas");

export async function saveMirada(action, data, key = null) {
    if (action === "add") {
        db.push(data);
        return {
            err: false,
            msg: `La mirada "${data.mirada}" se ha creado con éxito.`
        };
    } else if (action === "update") {
        db.child(key).update(data);
        return {
            err: false,
            msg: `La mirada "${data.mirada}" se ha modificado con éxito.`
        };
    } else {
        return {
            err: true,
            msg: "Ocurrió un error al salvar la información."
        };
    }
}

export function getMiradas() {
    return new Promise((resolve, reject) =>
        db.on("value", snapshot =>
            snapshot ?
            resolve(snapshot) :
            reject({
                err: true,
                msg: "No hay maratones que cargar"
            })
        )
    );
}



export function getMirada(key) {
    return new Promise((resolve, reject) =>
        db
        .child(key)
        .on("value", snapshot =>
            snapshot ?
            resolve(snapshot) :
            reject({
                err: true,
                msg: `No existe la mirada con la clave ${key}`
            })
        )
    );
}