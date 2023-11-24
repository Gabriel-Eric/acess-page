function setError(){

}
function removeError(){

}

function validateUser(){
    let user = document.getElementById('user').value;
    if(user.length < 3){
        console.log('FODEO')
        //setError()
    }else{
        console.log('Tudo certo');
        //removeError()
    }
}
function validateEmail(){
    let emailRegex     =    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    let email          =    document.getElementById('email').value;
    let validacaoEmail =    emailRegex.test(email);
    if(validacaoEmail  ==   false){
        //setError()
    }else{
        //removeError()
    }
    
}
function validatePass(){
    let pass = document.getElementById('pass').value;
    if(pass.length < 8){
        //setError()
    }else{
        //removeError()
    }
}
function confirmPass(){
    let pass = document.getElementById('pass').value;
    let passTwo = document.getElementById('passTwo').value;
    if(pass != passTwo){
        console.log('FODEO')
    } else{
        console.log('NICE')
        
    }
}
const person =[]
function submit(){
    console.log('Registro cocluído com sucesso')
    const user   = document.getElementById('user').value;
    const email  = document.getElementById('email').value;
    const pass   = document.getElementById('pass').value;
    const person = {Usuário: user,Email:email,Senha:pass};
    console.log(person);
}