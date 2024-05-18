
document.addEventListener('DOMContentLoaded', function() {
const expresiones = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{8,45}$/, // Letras y espacios, pueden llevar acentos.
    nota: /^[a-zA-ZÀ-ÿ\s]{1,160}$/, // Letras y espacios, pueden llevar acentos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}
const campos={
    nombre:false,
    nota:false,
    correo:false
}

const validarFormulario = (e) =>{
    switch (e.target.name){
        case "nombre":
            if(expresiones.nombre.test(e.target.value)){
                campos.nombre=true;
                document.getElementById('nombreERROR').innerHTML = '';
            }   else {
                document.getElementById('nombreERROR').innerHTML = '<p class="error">El nombre debe tener entre 8 y 45 caracteres.</p>';
            }
        break;
        case "nota":
            if(expresiones.nombre.test(e.target.value)){
                campos.nota=true;
                document.getElementById('notaERROR').innerHTML = '';
            }   else {
                document.getElementById('notaERROR').innerHTML = '<p class="error">Debe ingresar texto.</p>';
            }
        break;
        case "correo":
            if(expresiones.nombre.test(e.target.value)){
                campos.correo=true;
                document.getElementById('correoERROR').innerHTML = '';
            }   else {
                document.getElementById('correoERROR').innerHTML = '<p class="error">ingrese un correo valido.</p>';
            }
        break;
    }
}
const formulario = document.getElementById('myForm');
const inputs = document.querySelectorAll('#myForm');

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('blur',validarFormulario);
});

myForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (campos.nombre && campos.nota && campos.correo){
        console.log(e.target.nombre.value)
        console.log(e.target.nota.value)
        console.log(e.target.correo.value)
        myForm.reset();
        document.getElementById('info_valida').innerHTML = '<p class="error">Información enviada.</p>';
    } else {
        document.getElementById('info_invalida').innerHTML = '<p class="error">Campos inválidos.</p>';
    }
});



});