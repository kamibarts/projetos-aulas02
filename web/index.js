const info = document.getElementById('info');
info.addEventListener('submit', (event) => {
    event.preventDefault();
    const corpo = {
        data: info.data.value,
        valor: info.valor.value,
        descricao: info.descricao.value
    }
    fetch('http://localhost:4001/gastos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(corpo)
    })
        .then(response => response.status)
        .then(status => {
            if (status === 201) {
                msg3('Pacientes cadastrado com sucesso');
            } else {
                msg3('Erro ao cadastrar Pacientes');
            }
        });
});

fetch('http://localhost:4001/gastos')
    .then(response => response.json())
    .then(mls => {
        const tabela = document.getElementById('mls');
        mls.forEach((gasto) => {
            const linha = document.createElement('tr');
            linha.innerHTML = `
            <td data-label="Id:">${gasto.gasto_id}</td>
            <td data-label="Data:" contenteditable="true">${new Date(gasto.data).toLocaleDateString('pt-BR')}</td>
            <td data-label="Valor:" contenteditable="true">${gasto.valor}</td>
            <td data-label="Descrição:" contenteditable="true">${gasto.descricao}</td>
            <td><button onclick="alterar(this)">*</button><button onclick="excluir(${gasto.gasto_id})">-</button></td>
        `;
            tabela.appendChild(linha);
        });
    });


function msg3(mensagem){
    msg = document.getElementById('msg');
    msg.innerHTML = mensagem

    setTimeout(() => {
        window.location.reload();
    }, 1500);
}