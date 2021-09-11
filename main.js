import BotaoDeleta from "./js/deletaTarefa.js"
import BotaoConclui from "./js/concluiTarefa.js"

const handleNovoItem = (evento) => {
    evento.preventDefault()
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valorInput = input.value
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY')
    
    
    const dados = {
        valorInput, dataFormatada
    }
    
    const criaTarefa = criarTarefa(dados)

    lista.appendChild(criaTarefa)

    sessionStorage.setItem("tarefas",JSON.stringify(dados))

    input.value = " "

}

const criarTarefa = ({valorInput, dataFormatada}) => {
        
    
    const tarefa = document.createElement('li')    
    const conteudo = `<p class="content">${dataFormatada} * ${valorInput}</p>`

    tarefa.classList.add('task')        
    tarefa.innerHTML = conteudo

    const dados = {
        valorInput, dataFormatada
    }
    
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    
    return tarefa
};

const novaTarefa = document.querySelector('[data-form-button]')

 novaTarefa.addEventListener('click', handleNovoItem)