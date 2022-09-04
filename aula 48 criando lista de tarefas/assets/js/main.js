const inputTarefa = document.querySelector('.inputTarefa');
const btnTarefa = document.querySelector('.btnTarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi(){ // Esse (li) não está relacionado com function criaTarefa
    const li = document.createElement('li');
    return li;
}

inputTarefa.addEventListener('keypress', function(e) {  // Captura o Enter pressionado após digitar a tarefa e adiciona a tarefa a lista (li). 
    if (e.keyCode === 13) {                             // Sendo o código 13 o número de referência da tecla no keycode identificado no console de inspeção do código.
        if(!inputTarefa.value) return;
        criaTarefa(inputTarefa.value); // cria a tarefa na lista

    }
});

function criaBotaoApagar(li) { // Cria o botão de (apagar) ao lado da tarefa criada.
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'X'; // Nome que aparece no HTML
    botaoApagar.setAttribute('class', 'apagar'); // Set na classe apagar, cria a classe apagar
    botaoApagar.setAttribute('title', 'Apagar esta tarefa' ); // Coloca uma tarja de texto no botão com a indicação daquela tarefa, quando o mouse passar em cima.  
    li.appendChild(botaoApagar);
}

function limpaInput() { // Limpa o campo de Adicionar Tarefa após adiconado na lista (li)
    inputTarefa.value = '';
    inputTarefa.focus(); // O (focus) coloca o cursor e o deixa piscando
}

function criaTarefa(textoInput) {
   const li = criaLi(); 
   li.innerText = textoInput;
   tarefas.appendChild(li); // Adiciona as tarefas digitadas no campo adiciona tarefa
   limpaInput(); // Adicionado após o texto criado, para limpar o campo e aguardar o próximo comando
   criaBotaoApagar(li); // Adicionado após o texto criado.
   salvarTarefas(); // Vai salvar a tarefa digitada
}



btnTarefa.addEventListener('click', function() { // Criando a ação de clicar no botão
    if (!inputTarefa.value) return; // para não retornar nenhum valor ao campo quando não digitado nada
    criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(e) {  // Pega o clique do mouse no documento
    const el = e.target;

    if (el.classList.contains('apagar')){ // Localiza e pega o botão a ser clicado com o nome (apagar)
        el.parentElement.remove(); // Remove o elemento do registro Pai (li), apagando do código.
        salvarTarefas();
    }
});

function salvarTarefas() { // Função para salvar as tarefas adicionadas
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim(); // Remove a palavra apagar para vazio, daí irá aparecer a palavra digitada pelo usuário. (trim) remove o espaço entre as aspas no array
        listaDeTarefas.push(tarefaTexto); // Está jogando o texto dentro da ListaDeTarefas
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas); // Criado uma string do array convertido para JSON
    localStorage.setItem('tarefas', tarefasJSON); // Pequeno local de armazenamento do navegador, que memoriza as strings, por isso o JSON foi convertido em string.
}

function adicionaTarefasSalvas(){ // Vai ler as tarefas e adicionar na (ul)
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas); // Converteu as strings de volta para array

        for (let tarefa of listaDeTarefas) {
            criaTarefa(tarefa);
        }
} 
 adicionaTarefasSalvas();