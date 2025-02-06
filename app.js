cadastroDeNomes = [];
let lista = document.getElementById('listaAmigos');

function adicionarAmigo (){
    let nome = document.querySelector('input').value.trim();

    if(nome == '') {
        alert('O nome não pode ser vazio.');
        return;
    } else {
        cadastroDeNomes.push(nome);
        limparCampo();
    }

    atualizarLista();
    console.log('Amigo cadastrado: ', nome)
    return nome;
}

function exibeMensagem(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function limparCampo(){
    nome = document.querySelector('input');
    nome.value = '';
}

function atualizarLista(){
    lista.innerHTML = '';

    cadastroDeNomes.forEach(amigo => {
        let item = document.createElement('li');
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function sortearAmigo(){
    if (cadastroDeNomes.length == 0){
        alert('Adicione amigos para iniciar o sorteio.');
        return;
    }

    let amigoSorteado = cadastroDeNomes[Math.floor(Math.random() * cadastroDeNomes.length)];
    resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSorteado}</li>`;
}


