var expresiones = {
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+$/,
    fullName: /^[a-zA-ZÀ-ÿ]+\ [a-zA-ZÀ-ÿ]{6,40}$/,         // Debe tener más de 6 letras y al menos un espacio entre medio.    
	password: /^[a-zA-Z0-9]{8,16}$/,         // Al menos 8 caracteres, formados por letras y números.
	confirmPassword: /^[a-zA-Z0-9]{8,16}$/,  // Al menos 8 caracteres, formados por letras y números.
}

var campos = {
    email: false,
    fullName: false,
    password: false,
}

var formulario = document.getElementById('form');
var inputs = document.querySelectorAll('#form input');
var validation = document.querySelector('.validation');
var list = document.querySelector('.list');

var validForm = function (e) {
    switch (e.target.name){
        case "email-input":
            if (expresiones.email.test(e.target.value)) {
                document.getElementById('email-input').classList.remove('formulario-incorrecto');
                document.getElementById('email-input').classList.add('formulario-correcto');
                document.querySelector('#grupo-email .formularioGrupo').classList.remove('formulario-input-error');
                campos['email'] = true;
            } else {
                document.getElementById('email-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('email-input').classList.remove('formulario-correcto');
                document.querySelector('#grupo-email .formularioGrupo').classList.add('formulario-input-error'); 
                campos['email'] = false;
            }
        break;
        case "full-name-input":
            if (expresiones.fullName.test(e.target.value)) {
                document.getElementById('full-name-input').classList.remove('formulario-incorrecto');
                document.getElementById('full-name-input').classList.add('formulario-correcto');
                document.querySelector('#grupo-nombre .formulario-grupo').classList.remove('formulario-input-error');
                campos['fullName'] = true;
            } else {
                document.getElementById('full-name-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('full-name-input').classList.remove('formulario-correcto');
                document.querySelector('#grupo-nombre .formulario-grupo').classList.add('formulario-input-error');
                campos['fullName'] = false;
            }
        break;  
        case "password-input":
            if (expresiones.password.test(e.target.value)) {
                document.getElementById('password-input').classList.remove('formulario-incorrecto');
                document.getElementById('password-input').classList.add('formulario-correcto');
                document.querySelector('#grupo-password .formulario-grupo').classList.remove('formulario-input-error');
                campos['password'] = true;
            } else {
                document.getElementById('password-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('password-input').classList.remove('formulario-correcto');
                document.querySelector('#grupo-password .formulario-grupo').classList.add('formulario-input-error');
                campos['password'] = false;
            }
        break;
        case "confirm-password-input":
            var inputPassword1 = document.getElementById('password-input');
            var inputPassword2 = document.getElementById('confirm-password-input');
            if (inputPassword1.value !== inputPassword2.value) {
                document.getElementById('confirm-password-input').classList.remove('formulario-incorrecto');
                document.getElementById('confirm-password-input').classList.add('formulario-correcto');
                document.querySelector('#grupo-confirm-password .formulario-grupo').classList.remove('formulario-input-error');
                campos['password'] = true;
            } else {
                document.getElementById('confirm-password-input').classList.add('formulario-grupo-incorrecto');
                document.getElementById('confirm-password-input').classList.remove('formulario-correcto');
                document.querySelector('#grupo-confirm-password .formulario-grupo').classList.add('formulario-input-error');
                campos['password'] = false;
            }
        break;
    }
}
    
inputs.forEach( function(input){
    input.addEventListener('blur', validForm);   
})

formulario.addEventListener('submit', function(e){
    e.preventDefault();
    if (campos.email && campos.fullName && campos.password){
        formulario.reset();
    } 
})

var fieldsQuantity = function () {
    validation.style.display = 'flex';
    var fields = document.querySelectorAll('input');
    var fieldsNumber = fields.length;
    if (fieldsNumber == 5) {
        var fieldsNode = document.createElement("LI");
        var fieldsText = document.createTextNode('Input fields are correct');
        fieldsNode.appendChild(fieldsText);
        list.appendChild(fieldsNode);
    }
    else {
        var nFieldsNode = document.createElement("LI");
        var nFieldsText = document.createTextNode('There are missing inputs');
        nFieldsNode.appendChild(nFieldsText);
        list.appendChild(nFieldsNode)
    }
}
fieldsQuantity()

var validAnchor = function () {
    validation.style.display = 'flex';
    var anchor = document.querySelector('#form a').href;
    var validHref = 'login.html';
    if (anchor == validHref) {
        var anchorNode = document.createElement("LI");
        var anchorText = document.createTextNode('Anchor tag is valid');
        anchorNode.appendChild(anchorText);
        list.appendChild(anchorNode);
    }
    else {
        var nAnchorNode = document.createElement("LI");
        var nAnchorText = document.createTextNode('Anchor tag is invalid');
        nAnchorNode.appendChild(nAnchorText);
        list.appendChild(nAnchorNode);
    }
}
validAnchor();

var validBtns = function() {
    validation.style.display = 'flex';
    var submitBtn = document.querySelector('input[type="submit"]').value;
    var submitValue = 'Register';
    if (submitBtn == submitValue) {
        var btnsNode = document.createElement("LI");
        var btnsText = document.createTextNode('Buttons content is correct');
        btnsNode.appendChild(btnsText);
        list.appendChild(btnsNode);
    }
    else {
        var nBtnsNode = document.createElement("LI");
        var nBtnsText = document.createTextNode('Buttons content is wrong');
        nBtnsNode.appendChild(nBtnsText);
        list.appendChild(nBtnsNode);
    }
}
validBtns();

var finalValidation = function () {
    if ((fieldsQuantity == true) && (validAnchor == true) && (validBtns == true)) {
        validation.style.display = 'flex';
        validation.style.color = 'green';
        validation.textContent = 'Every validation has passed';
    }
}
finalValidation();