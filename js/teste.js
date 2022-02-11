




 localStorage.setItem("CPF/CNPJ: ", cpf);
 localStorage.setItem("Razão Social: ", razao);
 localStorage.setItem("Email: ", email);
 localStorage.setItem("Senha: ", senha);







let cpfCadastro = document.getElementById("cpfcadastro");
let emailCadastro = document.getElementById("emailcadastro");
let razaoSocial = document.getElementById("razaosocial");
let senhaCadastro = document.getElementById("senhacadastro");


function acesso(){
   
       
    location.href = "cadastro-completo.html"
    
}

function cadastro(){

    
    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]');

    listaUser.push(
    {

        razao: razaoSocial.value,
        cnpj: cpfCadastro.value,
        emaill: emailCadastro.value,
        senhaa: senhaCadastro.value

    }
    );

    localStorage.setItem("listaUser", JSON.stringify(listaUser));

      
    location.href = "dados-usuarios.html"  

    

}

document.getElementById("cpfcadastro").innerHTML = localStorage.getItem('listaUser');