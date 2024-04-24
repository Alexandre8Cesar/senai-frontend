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
    let _lineNumber = document.getElementById('_lineNumber').value;
    let item = document.getElementById('item').value;
    let status = document.getElementById('status').value;
    if (item != '' && status != '') {
        let obj = {};
        obj.item = item;
        obj.status = status;
        if (indice == "") {
            createRow(obj).then((o) => {
                lsItem.push(o);
                ataulizarTabela();
            });
        } else {
            patchRow(_lineNumber, obj).then((o) => {
                lsItem[indice] = o;
                ataulizarTabela();
            });
        }
        console.table(lsItem);
        
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
    document.getElementById('_lineNumber').value = "";
    document.getElementById('item').value = "";
    document.getElementById('status').value = "";
}

function editar(indice) {
    obj = lsItem[indice];
    document.getElementById('indice').value = indice;
    document.getElementById('_lineNumber').value = obj._lineNumber;
    document.getElementById('item').value = obj.item;
    document.getElementById('status').value = obj.status;
}

function apagar() {
    let indice = document.getElementById('indice').value;
    let _lineNumber = document.getElementById('_lineNumber').value;
    if (indice != "") {
        lsItem.splice(indice, 1);
        ataulizarTabela();
        limparForm();
    } else {
        alert("Necessário selecionar algum item.")
    }
}

async function getData() {
    const response = await fetch("https://api.zerosheets.com/v1/yfr");
    const data = await response.json();

    // will return an array of objects with the _lineNumber
    return data;
}

async function createRow(payload) {
    /* Payload should be an object with the columns you want to create, example:
    const payload = {
        column1: "foo",
        column2: "bar"
    };
    */
    const response = await fetch("https://api.zerosheets.com/v1/yfr", {
      method: "POST",
      body: JSON.stringify(payload)
    });
    const data = await response.json();
  
    return data;
}

async function patchRow(lineNumber, payload) {
    /* Payload should be an object with the columns you want to update, example:

    const payload = {
        foo: "bar"
    };
    */
    const url = "https://api.zerosheets.com/v1/yfr/" + lineNumber;
    const response = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(payload)
    });
    const data = await response.json();
    
    // will return an object of the new row plus the _lineNumber
    return data;
}

async function deleteRow(lineNumber) {
    const url = "https://api.zerosheets.com/v1/yfr/" + lineNumber; // lineNumber comes from the get request
    await fetch(url, {
        method: "DELETE"
    });
    // No response data is returned
}

getData().then( (ls) => {
    lsItem = ls;
    ataulizarTabela();
} );