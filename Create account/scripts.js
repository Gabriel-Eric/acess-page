function setError(){

}
function removeError(){

}
function validateUser(){
    let user = document.getElementById('user').value;
    if(user.length < 3){
        console.log('FODEO');
        //setError()
        return false
    }else{
        console.log('Tudo certo');
        //removeError()
        return true
    }
}
function validateEmail(){
    let emailRegex     =    /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    let email          =    document.getElementById('email').value;
    let validacaoEmail =    emailRegex.test(email);
    if(validacaoEmail  ==   false){
        console.log('FODEO');
        //setError()
        return false
    }else{
        console.log('Tudo certo');
        //removeError()
        return true
    }
    
}
function validatePass(){
    let pass = document.getElementById('pass').value;
    if(pass.length < 8){
        console.log('FODEO');
        //setError()
        return false
    }else{
        console.log('Tudo certo')
        //removeError()
        return true

    }
}
function confirmPass(){
    let pass = document.getElementById('pass').value;
    let passTwo = document.getElementById('passTwo').value;
    if(pass != passTwo){
        console.log('FODEO')
        //setError()
        return false
    } else{
        console.log('NICE')
        //removeError()
        return true  
    }
}
const accs =[]
function submit(){ 
    if(validateUser() == true && validateEmail() == true && validatePass() == true && confirmPass() == true){
    console.log('Registro cocluído com sucesso')
    const user   = document.getElementById('user').value;
    const email  = document.getElementById('email').value;
    const pass   = document.getElementById('pass').value;
    const person = {Usuário: user,Email:email,Senha:pass};
    accs.push(person);
    for(let l = 0; l < accs.length; l++){
        console.log(accs[l])}
    }
}



