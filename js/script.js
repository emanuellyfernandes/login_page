let cpfCadastro = document.getElementById("cpfcadastro");
let emailCadastro = document.getElementById("emailcadastro");
let senhaCadastro = document.getElementById("senhacadastro");
let razaoSocial = document.getElementById("razaosocial");

function acesso(){
   
       
    location.href = "cadastro-completo.html"
    
}

function cadastro(){
    
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push(
    {

        razao: razaoSocial.value,
        cnpj: cpfCadastro.value,
        email: emailCadastro.value
    }
    )

    localStorage.setItem("listaUser", JSON.stringify('listaUser'));

      
    location.href = "dados-usuarios.html"  

    document.getElementById("dados").innerHTML = localStorage.getItem('listaUser');


}


