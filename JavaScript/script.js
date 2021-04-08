
function validarCPF(cpf) {
    var cpf = document.getElementById('inputCPF').value;
    
    cpf = cpf.toString().replace(/-|\./g, "");
    let soma = 0
   for (let i = 0; i < cpf.length-2; i++) {
       soma += cpf[i] * ((cpf.length-1)-i)
    }
    
    if (soma % 11 > 1 && soma % 11 < 10) {
        var primeiroDigito = 11 - soma % 11
        
    } else{
        primeiroDigito = 0
    }
    
    
    if (primeiroDigito != cpf[9]) {
        const valid = document.getElementById('valid')
        const invalid = document.getElementById('invalid')
        invalid.style.background = '#ff1a1a';
        invalid.style.color = '#fefefe';
        valid.style.background = '#536F5E'
        valid.style.color = '#C0CFC6'
        return false
    }else{       
        soma = 0
        for (let i = 1; i < cpf.length-1; i++) {
            soma += cpf[i] * (cpf.length-i)
        }
        var segundoDigito = soma % 11

        if (segundoDigito > 1 && segundoDigito < 10){
            var segundoDigito = 11 - segundoDigito
        }else{
            segundoDigito = 0
        }
        if (segundoDigito != cpf[10]) {
            const valid = document.getElementById('valid')
            const invalid = document.getElementById('invalid')
            invalid.style.background = '#ff1a1a';
            invalid.style.color = '#fefefe';
            valid.style.background = '#536F5E'
            valid.style.color = '#C0CFC6'
            return false
        }

        valid.style.background = '#46AD44';
        valid.style.color = '#fefefe'
        invalid.style.background = '#CFC0C6';
    }
}
