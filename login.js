var validation = document.querySelector('validation');

var fieldsQuantity = function () {
    var fields = document.querySelectorAll('input');
    var fieldsNumber = fields.length;
    if (fieldsNumber = 2) {
        validation.append('Input fields are correct');
    }
    else {
        validation.append('There are missing inputs');
    }
}
fieldsQuantity()

var validAnchor = function () {
    var anchor = document.querySelector('a').href;
    var validHref = 'register.html';
    if (anchor = validHref) {
        validation.append('Anchor tag is valid');
    }
    else {
        validation.append('Anchor tag is invalid');
    }
}
validAnchor();

var validBtns = function() {
    var submitBtn = document.querySelector('submit').nodeValue;
    var submitValue = 'Iniciar Sesión';
    if (submitBtn = submitValue) {
        validation.append('Button content is correct');
    }
    else {
        validation.append('Button content is wrong');
    }
}
validBtns();

var validation = function () {
    if ((fieldsQuantity = true) && (validAnchor = true) && (validBtns = true)) {
        validation.textContent = 'Every validation has passed';
    }
}
validation();