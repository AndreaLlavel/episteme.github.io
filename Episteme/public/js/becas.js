/*Esta funcion sirve para verificar los 3 primeros elementos del formulario, como ya se ve si se incluyen menos de 2 o 3 caracteres te saldra el error de que debes poner mas nombre
, si introduces los caracteres adecuados que se requieren , no tendras problema en continuar con el formulario al rellenar los espacios. aceptara los caracteres de tipo string*/

function becas(){
    if(document.getElementById('Nombre').value.length < 2 ){
        todo_correcto = false;
    if(document.getElementById('Apellido').value.length < 3 ){
    todo_correcto = false;
    if(document.getElementById('Nacionalidad').value.length < 3 ){
        todo_correcto = false;
}
/* en esta parte se usan variable == var para declarar que expresiones son aceptadas en las que se podran poner en el e-mail , ademas mas abajo veremos que en el mensaje ya indicamos 
que se debe escribir algo , si no se escrube nada aparecera una venta emergente en la que te avisa que es un campo vacio y lo tienes que rellenar para asi seguir el formulario*/
var expresion = [a-zA-Z0-9]; /*estas expresiones van a aceptar cualquier letra en minuscula y mayusacula ademas de los numeros del cero al nueve , es decir de tipo string y numericos*/
var mail = document.form.email.value;
    if (!expresion.test(mail)){
        todo_correcto = false;
}
var texto = document.getElementById('Mensaje').value;
    if(texto==''){
        alert("El textarea no puede estar vacío")
} 
/*declaramos una variable, ademas de añadir y que se mantenga a la espera la validacion del checkbox*/
var checkbox = document.getElementById('check');
    checkbox.addEventListener("change", validaCheckbox, false);
/*esta funcion sirce para validar el checkbox , al ser boleano deberas hacer el click para que marque que esta seleccionado, o en caso contrario */
function validaCheckbox(){
    var checked = checkbox.checked;
    if(checked){
        alert('checkbox esta seleccionado');
    }
    if(!document.getElementById('contactar').checked){
        todo_correcto = false;
    if(!todo_correcto){
        alert('Algunos campos no están correctos, revisa los que te quedan');
    }   
    /*en el codigo de abajo se muestra que si todo esta correcto se te deovlvera como todo correcto*/  
    return todo_correcto;
}}}}}