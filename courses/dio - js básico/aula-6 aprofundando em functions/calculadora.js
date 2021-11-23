    function cauculadora(){
        const operacao = Number(prompt("escolha uma operacao:\n 1: soma (+)\n 2: diferença (-)"
            + "\n 3: multiplicação (*)\n 4: divisão real (/)"
            + "\n 5: divisão inteira (%)/n 6: potenciação (**)"));
        console.log(operacao);
        if(!operacao || operacao >= 7 || operacao < 0) {
            alert("Erro - informe um valor valido");
            cauculadora();
        }else{
        let n1 = Number(prompt("insira o primeiro número"));
        let n2 = Number(prompt("insira o segundo número"));
        let resultado;
        
        if(!n1 || !n2){
            alert("Erro - parâmetros inválidos!");
            cauculadora();
        }
        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao()
        }

        function diferenca(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao()
        }
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao()
        }
        function divisaoReal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao()
        }
        function restoDaDivisao(){
            resultado = n1 % n2;
            alert(`O resto da divisao entre ${n1} e ${n2} é ${resultado}`);
            novaOperacao()
        }

        function restoDaDivisao(){
            resultado = n1 % n2;
            alert(`${n1} elevado a ${n2} é ${resultado}`);
            novaOperacao()
        }

        function novaOperacao() {
            let opcao = prompt("deseja fazer outra operação?\n1- Sim\n2- Não");
            if (opcao == 1) {
                cauculadora();
            }else if(opcao == 2){
                alert("Até mais!");
            }else {
                alert("Digite uma opcao válida")
                novaOperacao();
            }

        }

        switch(operacao){
            case 1: soma();
            break;
            case 2: diferenca();
            break;
            case 3: multiplicacao();
            break;
            case 4: divisaoReal();
            break;
            case 5: restoDaDivisao();
            break;
            case 6: potencia();
            break;
        }
    }
}
cauculadora();