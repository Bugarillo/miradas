/*
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/template_strings
https://wesbos.com/tagged-template-literals/
https://carlosazaustre.es/es6-tagged-template-literals/
*/

export function html(strings, ...values) {
    let str = "";
    strings.forEach((string, i) => {
        str += string + (values[i] || "");
    });
    return str;
}