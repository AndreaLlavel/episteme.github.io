
function validarFormulario() {
    var campos = ['nombre', 'email', 'telefono', 'curso','mensaje'];
    for (var i = 0; i < campos.length; i++) {
        var campo = document.forms["formularioContacto"][campos[i]];
        if (campo.value == "") {
            alert("El campo " + campos[i] + " es obligatorio.");
            campo.focus();
            return false;
        }
    }
    
    var terminos = document.forms["formularioContacto"]["terminos"];
    if (!terminos.checked) {
        alert("Debe aceptar los términos y condiciones.");
        terminos.focus();
        return false;
    }
    
    return true;
}