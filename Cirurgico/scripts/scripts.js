const form = document.getElementById('form');
const tbody = document.getElementById('tbody');

const statusColors = {
    "Pré-Operatório": 'table-danger',
    "Recuperação": 'table-primary',
    "Transferido": 'table-success'
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pacienteNome = document.getElementById('nome').value;
    const status = document.getElementById('status').value;
    const inicio = document.getElementById('inicioPrevisto').value;
    const inicioCirurgia = document.getElementById('inicioCirurgia').value;
    const fimCirurgia = document.getElementById('finalCirurgia').value;
    const saidaPrevista = document.getElementById('saidaPrevista').value;

    const newRow = document.createElement('tr');
    newRow.innerHTML = `
    <td>${pacienteNome}</td>
    <td class="${statusColors[status]}">${status}</td>
    <td>${inicio}</td>
    <td>${inicioCirurgia}</td>
    <td>${fimCirurgia}</td>
    <td>${saidaPrevista}</td>
  `;
    tbody.appendChild(newRow);

    document.getElementById('nome').value = '';
    document.getElementById('status').value = '';
    document.getElementById('local').value = '';
    document.getElementById('inicioPrevisto').value = '';
    document.getElementById('inicioCirurgia').value = '';
    document.getElementById('finalCirurgia').value = '';
    document.getElementById('saidaPrevista').value = '';
});
  