

function Selektor() {
    return `
<div class="bg-dark p-3">
    <div class="container d-flex justify-content-end">
        <div class="col-3 text-right align-top">Temas</div>
        <select class="form-control col-3 my-1">
        <option value="" selected>Categoría</option>
        <option value="amigos">Amigos</option>
        <option value="arquitectura">Arquitectura</option>
        <option value="arte">Arte</option>
        <option value="gastronomia">Gastronomía</option>
        <option value="gente">Gente</option>
        <option value="texturas">Texturas</option>
        <option value="paisaje">Paisaje</option>
        <option value="varios">Varios</option>
        </select>
    </div>


</div>

`;
}

export default Selektor;