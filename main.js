const form = document.getElementById('form-contato');
const imgContato = '<img src="./imagens/contato.png" alt="Contato" />';
const contatos = [];
const telefones = [];

let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaTotal();
});

function adicionaLinha(){
    const inputNomeContato = document.getElementById('nome-contato');
    const inputNumeroTelefone = document.getElementById('numero-telefone');

    console.log(inputNomeContato.value);
    console.log(inputNumeroTelefone.value);


    if (contatos.includes(inputNomeContato.value)){
        alert(`O contato ${inputNomeContato.value} já foi inserido à sua lista anteriormente.`);
    } else if (telefones.includes(inputNumeroTelefone.value)){
        alert(`O número ${inputNumeroTelefone.value} já foi inserido à sua lista anteriormente.`);
    } else {
        contatos.push(inputNomeContato.value);
        telefones.push(inputNumeroTelefone.value);

        let linha = '<tr>';
        linha += `<td>${imgContato}</td>`;
        linha += `<td>${inputNomeContato.value}</td>`;
        linha += `<td>${inputNumeroTelefone.value}</td>`;
        linha += '</tr>';

        linhas += linha;
    }

    inputNomeContato.value = '';
    inputNumeroTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaTotal() {
    document.getElementById('total-final').innerHTML = contatos.length;
    console.log(contatos.length);
}
