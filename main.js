import BotaoDeleta from "./js/deletaTarefa.js"
import BotaoConclui from "./js/concluiTarefa.js"

const criarTarefa = (evento) => {
        
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valorInput = input.value
    const conteudo = `<p class="content">${valorInput}</p>`
    const tarefa = document.createElement('li')    
    const calendario = document.querySelector('[data-form-date]')
    console.log(calendario.value)
    tarefa.classList.add('task')        
    tarefa.innerHTML = conteudo
    
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    lista.appendChild(tarefa)
    
    input.value = " "
};

const novaTarefa = document.querySelector('[data-form-button]')

 novaTarefa.addEventListener('click', criarTarefa)