let inputName = document.querySelector("#input-name")
let inputPhone = document.querySelector("#input-fone")
let inputEmail = document.querySelector("#input-email")

let responseValidation = document.querySelector("#verificacao")

let validationOfInput = []

function resultForm(event) {
    event.preventDefault()

    if (event) {
        //------ Lógica de Verificação do Nome ------------
        const name = inputName.value
        if (name.length > 3) {
            validationOfInput.push(true);
        } else {
            validationOfInput.push(false);
        }


        // ------ Lógica de Verificação do Telefone ------------
        const phone = inputPhone.value
        if (phone.length >= 10) {
            validationOfInput.push(true);

        } else {
            validationOfInput.push(false);
        }


        // ------ Lógica de Verificação do Email ------------
        const email = inputEmail.value
        const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

        if (regexEmail.test(email)) {
            validationOfInput.push(true);
        } else {
            validationOfInput.push(false);
        }

        // ------ Lógica de Verificação de Todos os Inputs e a incerção da Mensagem ------------
        if (validationOfInput[0] === true && validationOfInput[1] === true && validationOfInput[2] === true) {
            responseValidation.innerHTML = "Dados Enviados! Nossos colaboradores irão entrar em contato com você"
        } else {
            responseValidation.innerHTML = "Dados Inválidos!!"
        }

        // Limpar os Inputs
        inputName.value = " ";
        inputPhone.value = " ";
        inputEmail.value = " ";
    }

}


