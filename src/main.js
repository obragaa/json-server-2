function buscaCep() { 
    let inputCep = document.querySelector('input\[name=id\]'); 
    let id = inputCep.value.replace('-', '');
    let url = 'http://localhost:3000/fakeapi/' + id; 
    let xhr = new XMLHttpRequest(); xhr.open('GET', url, true); 
    xhr.onreadystatechange = function() { 
    if (xhr.readyState == 4) { 
    if (xhr.status = 200) preencheCampos(JSON.parse(xhr.responseText)); } } 
    xhr.send(); 
}

function preencheCampos(json) { 
    document.querySelector('input[name=endereco]').value = json.logradouro;
    document.querySelector('input[name=bairro]').value = json.bairro; 
    document.querySelector('input[name=cidade]').value = json.localidade; 
    document.querySelector('input[name=estado]').value = json.uf; 
}