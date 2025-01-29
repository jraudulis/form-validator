const form = document.getElementById('form');
const password = document.getElementById('password');
const ConfirmPassword = document.getElementById('confirm-pass');
const footer = document.getElementById('footer');
const footerMessage = document.getElementById('message');
const submitBtn = document.getElementById('button');

let isValid = false;
let passwordsMatched = false;

function validateForm() {
    isValid = form.checkValidity();

    if(!isValid) {
        footerMessage.textContent = 'Fill all the required fields';
        footerMessage.style.color = 'red';
        footer.style.borderColor = 'red';
        return;  
    }

    if (password.value === ConfirmPassword.value) {
        passwordsMatched = true;
        password.style.borderColor = 'green';
        ConfirmPassword.style.borderColor = 'green';
    } else {
        passwordsMatched = false;
        footerMessage.textContent = `Passwords don't match`;
        footerMessage.style.color = 'red';
        footer.style.borderColor = 'red';
        password.style.borderColor = 'red';
        ConfirmPassword.style.borderColor = 'red';
        return;
    }
    
    if (isValid && passwordsMatched) {
        footerMessage.textContent = 'Registered Sucessfuly';
        footerMessage.style.color = 'green';
        footer.style.borderColor = 'green';
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user);
}


function processFormData(event) {
    event.preventDefault();
    validateForm();
    if (isValid && passwordsMatched) {
        storeFormData();
    }
}

// Event listeners
form.addEventListener('submit', processFormData);