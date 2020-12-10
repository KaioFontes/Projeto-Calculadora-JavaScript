//Configurações da Calculadora.

//Função Calcular.
function calcular(tipo, valor){
    //condicional que aciona o botão de limpar o campo de valor.
    if(tipo === 'acao'){
        if(valor === 'c'){
            document.getElementById('text').value = '';
        }

        else if(valor === '+' || valor === '-' || valor === '*' || valor ==='/' || valor === '.'){
            var campo_valor = document.getElementById('text').value;
            document.getElementById('text').value = campo_valor + valor;
        }

        else if(valor === '='){
            var campo_valor = document.getElementById('text').value;
            document.getElementById('text').value = eval(campo_valor);
        }

    }//condicional que concatena o valor digitado ao campo de valor.
    else if(tipo === 'valor'){;
        document.getElementById('text').value += valor;
    }
}


