const uri = 'http://localhost:4000';


const titulo = document.querySelector('header h1'); //DOM
fetch(uri)
    .then(resp => resp.json())
    .then(resp => titulo.innerHTML = resp.titulo);


const corpo = document.querySelector('table tbody'); //DOM
fetch(uri + '/consultas')
    .then(resp => resp.json())
    .then(resp => {
        resp.forEach(c => {
            const linha = document.createElement('tr')
            linha.innerHTML = `
                <td>${c.consulta_id}</td>
                <td>${c.nome_paciente}</td>
                <td>${c.nome_medico}</td>
                <td>${c.data_hora}</td>
            `;
            corpo.appendChild(linha);
        });
    });


const form = document.querySelector('form'); //DOM
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const body = {
        paciente: form.paciente.value,
        medico: form.medico.value,
        data: form.data.value
    };

    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'User-Agent': 'insomnia/10.3.1' },
        body: JSON.stringify(body)
    };

    fetch(uri + '/consultas', options)
        .then(resp => resp.status)
        .then(resp => resp === 201 ? window.location.reload() : alert(resp))
        .catch(err => console.error(err));
});
