const button1 = document.querySelector('.botao');
const popup = document.querySelector('.popup-wrapper');
const closeButton = document.querySelector('.popup-close');

       let cpf = cpfCadastro.value
       let email = emailCadastro.value
       let razao = razaoSocial.value
       let senha = senhaCadastro.value

       localStorage.setItem("cpf", cpf, razao);
       localStorage.setItem("razao social", razao);
       localStorage.setItem("email", email);
       localStorage.setItem("senha", senha);

       document.getElementById("num-ie").innerHTML= localStorage.getItem('razao');


function botao()



       /*button1.addEventListener('click', () => {
    popup.style.display = 'block'
});*/

closeButton.addEventListener('click', () => {
    popup.style.display = 'none';
});

       
