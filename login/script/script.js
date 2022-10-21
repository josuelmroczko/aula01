function entrar(){

    var login = document.getElementById('login').value; 
    var senha = document.getElementById('senha').value; 

    if (login == 'josuel@outlook.com' && senha == '12345'){
        location.href = "home.html"
    }else {
        alert ('email ou senha invalidos')
    }


}