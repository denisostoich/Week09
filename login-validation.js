var expresiones = {
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,    
	password: /^[a-zA-Z0-9]{8,16}$/,         // Al menos 8 caracteres, formados por letras y números.
}

var campos = {
    email: false,
    password: false,
}

var formulario = document.getElementById('form');
var inputs = document.querySelectorAll('#form input');

var validForm = function (e) {
    switch (e.target.name){
        case "email-input":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('email-input').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('email-input').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-email .formulario-input').classList.remove('formulario-input-error');
                campos['email'] = true;
            } else {
                document.getElementById('email-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('email-input').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-email .formulario-input').classList.add('formulario-input-error'); 
                campos['email'] = false;
            }
        break;  
        case "password-input":
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('password-input').classList.remove('formulario-grupo-incorrecto');
                document.getElementById('password-input').classList.add('formulario-grupo-correcto');
                document.querySelector('#grupo-password .formulario-input').classList.remove('formulario-input-error');
                campos['password'] = true;
            } else {
                document.getElementById('password-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('password-input').classList.remove('formulario-grupo-correcto');
                document.querySelector('#grupo-password .formulario-input').classList.add('formulario-input-error');
                campos['password'] = false;
            }
        break;
    }
}
    
inputs.forEach( function(input){
    input.addEventListener('keyup', validForm);
    input.addEventListener('blur', validForm);   
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    var data = document.querySelector('.data');
    if (campos.email && campos.password){
        formulario.reset();
        data.style.display = 'flex';
        data.innerHTML ="Email: "+document.querySelector('#email-input').value+
        "\nPassword: "+document.querySelector('#password-input').value;
        fetch('https://jsonplaceholder.typicode.com/users?email='+document.querySelector('#email-input').value)
            .then (response => response.json())
            .then (json => console.log(json));
        console.log("https://jsonplaceholder.typicode.com/users?email="+document.querySelector('#email-input').value);
    }
})