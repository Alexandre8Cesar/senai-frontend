document.getElementById('bt-apagar').addEventListener('click', apagar);
document.getElementById('bt-gravar').addEventListener('click', gravar);
document.getElementById('bt-novo').addEventListener('click', limparForm);
let lsItem = [];

let tpStatus = {
    "Em Fila": "text-bg-info",
    "Iniciado": "text-bg-success",
    "Concluido": "text-bg-danger"
}

function gravar() {
    let indice = document.getElementById('indice').value;
    let item = document.getElementById('item').value;
    let status = document.getElementById('status').value;
    if (item != '' && status != '') {
        let obj = {};
        obj.item = item;
        obj.status = status;
        if (indice == "") {
            lsItem.push(obj);
        } else {
            lsItem[indice] = obj;
        }
        console.table(lsItem);
        ataulizarTabela();
        limparForm();
    } else {
        alert('Item e Status devem estar preenchidos')
    }
}

function ataulizarTabela() {
    localStorage.setItem("lsItem",JSON.stringify(lsItem));
    let tbody = '';
    if (lsItem.length > 0) {
        let i = 0;
        for (const obj of lsItem) {
            tbody += `<tr onclick='editar(${i})'><td class="${tpStatus[obj.status]}">${obj.item}</td></tr>`;
            i++;
        }
    } else {
        tbody = `<tr><td>Lista vazia</td></tr>`;
    }
    document.getElementById('tbody').innerHTML = tbody;
}

function limparForm() {
    document.getElementById('indice').value = "";
    document.getElementById('item').value = "";
    document.getElementById('status').value = "";
}

function editar(indice) {
    obj = lsItem[indice];
    document.getElementById('indice').value = indice;
    document.getElementById('item').value = obj.item;
    document.getElementById('status').value = obj.status;
}

function apagar() {
    let indice = document.getElementById('indice').value;
    if (indice != "") {
        lsItem.splice(indice, 1);
        ataulizarTabela();
        limparForm();
    } else {
        alert("Necessário selecionar algum item.")
    }
}

lsItem = JSON.parse(localStorage.getItem("lsItem"));
if(lsItem == null){
    localStorage.setItem("lsItem","[]");
    lsItem = [];
}

ataulizarTabela();