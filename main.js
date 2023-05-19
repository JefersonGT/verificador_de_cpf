function formatarCPF() {
    var cpf = document.getElementById('cpf').value;
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length > 3 && cpf.length <= 6) {
        cpf = cpf.replace(/(\d{3})(\d+)/, "$1.$2");
    } else if (cpf.length > 6 && cpf.length <= 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d+)/, "$1.$2.$3");
    } else if (cpf.length > 9) {
        cpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, "$1.$2.$3-$4");
    }
    
    document.getElementById('cpf').value = cpf;
}

function verificarCPF() {
    var cpf = document.getElementById('cpf').value;
    cpf = cpf.replace(/\D/g, '');
    
    if (cpf.length !== 11 || /^(.)\1+$/.test(cpf)) {
        document.getElementById('resultado').innerHTML = 'CPF inválido';
        document.getElementById('resultado').className = 'invalido';
        return;
    }
    
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    
    var resto = soma % 11;
    
    if (resto === 1 || resto === 0) {
        if (cpf.charAt(9) !== '0') {
            document.getElementById('resultado').innerHTML = 'CPF inválido';
            document.getElementById('resultado').className = 'invalido';
            return;
        }
    } else {
        if (cpf.charAt(9) !== (11 - resto).toString()) {
            document.getElementById('resultado').innerHTML = 'CPF inválido';
            document.getElementById('resultado').className = 'invalido';
            return;
        }
    }
    
    soma = 0;
    for (var j = 0; j < 10; j++) {
        soma += parseInt(cpf.charAt(j)) * (11 - j);
    }
    
    resto = soma % 11;
    
    if (resto === 1 || resto === 0) {
        if (cpf.charAt(10) !== '0') {
            document.getElementById('resultado').innerHTML = 'CPF inválido';
            document.getElementById('resultado').className = 'invalido';
            return;
        }
    } else {
        if (cpf.charAt(10) !== (11 - resto).toString()) {
            document.getElementById('resultado').innerHTML = 'CPF inválido';
            document.getElementById('resultado').className = 'invalido';
            return;
        }
    }
    
    document.getElementById('resultado').innerHTML = 'CPF válido';
    document.getElementById('resultado').className = 'valido';

}