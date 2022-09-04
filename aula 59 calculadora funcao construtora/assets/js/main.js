function Calculadora () {
    this.display = document.querySelector('.display'); 

    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keypress', e => {
            if (e.keyCode !== 13) return;
            this.realizaConta();
        });
    }

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const el = event.target; // Refere-se ao botao que está sendo pressionado pelo usuário
            if (el.classList.contains('btn-num')) this.addNumeDisplay(el); // envia o elemento que está sendo clicado
            if (el.classList.contains('btn-clear')) this.clear(); // envia o elemento que está sendo clicado
            if (el.classList.contains('btn-del')) this.del(); // envia o elemento que está sendo clicado
            if (el.classList.contains('btn-eq')) this.realizaConta(); // envia o elemento que está sendo clicado
        });
    };

    this.realizaConta = () => {
        try {
        const conta = eval(this.display.value);

        if(!conta) {
            alert('Conta Inválida');
            return;
        }
    
        this.display.value = conta;
        }catch (e) {
         alert('Conta Inválida');
         return;   
        }
    };

    this.addNumeDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus(); // coloca o foco da digitação no display, evitando a repetição do ultimo número digitado
    };
    
    this.clear = () => this.display.value = ''; // aqui ele limpa a tela do display
        
    this.del = () => this.display.value = this.display.value.slice(0, -1); // apaga os caracteres um a um
    
    
}

const calculadora = new Calculadora(); // criação do objeto
calculadora.inicia();


