var form = document.getElementById('form');
var input = document.getElementById('input_email');

form.addEventListener('submit', (e)=>{
    if(input.value === ""){
        alert('O campo e-mail não pode ficar em branco!')
    } else {
        var inputValor = input.value;
        enviarEmail(inputValor)
    }
    e.preventDefault();
});

async function goBack(){
    window.location.href = 'index.html'
}

async function enviarEmail(valor){
    const email = valor;
    axios.post('http://localhost:3000/emails', {email})
    .then((response) => {
        window.location.href = 'agradecimentos.html'
    })
    .catch((error) => {
        window.location.href = 'error.html'
    })
}