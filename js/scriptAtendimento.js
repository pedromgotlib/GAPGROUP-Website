
const btnAtendimento = document.getElementById('btn-form-s');

function ativarFormulario(){
    const navega = document.getElementById('navegacao');
    navega.classList.toggle('active');
}

btnAtendimento.addEventListener('click', ativarFormulario);