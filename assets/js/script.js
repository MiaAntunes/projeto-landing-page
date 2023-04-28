const inputName = document.querySelector("#input-name")
const inputFone = document.querySelector("#input-fone")
const inputEmail = document.querySelector("#input-email")

let respostaVerificacao = document.querySelector("#verificacao")

function enviarFormulario(event) {
    let validacaoDosInput = []
    
    //Nome (refazer !!!!!)
    if( typeof inputName.value === "string" ){
        validacaoDosInput.push(true);
        console.log("Certo")
    }else{
        validacaoDosInput.push(false);
        console.log("Errado")
    }

    // Fone OKKKKKKKKKKKKKKKKKKKK -------
    const fone = inputFone.value
    if( fone.length < 10){
        console.log("Errado")
        validacaoDosInput.push(false);

    }else{
        console.log("Certo")
        validacaoDosInput.push(true);
    }

    //Email - Não feito

    if(inputEmail.value === "" ){

    }else{

    }

    //Verificação total
    if(validacaoDosInput[0] === true && validacaoDosInput[1] === true && validacaoDosInput[2] === true){
        respostaVerificacao.innerHTML = "Dados Enviados! Nossos colaboradores irão entrar em contato com você"
    }else{
        respostaVerificacao.innerHTML = "Dados Inválidos!!"
    }

    console.log(validacaoDosInput)
}