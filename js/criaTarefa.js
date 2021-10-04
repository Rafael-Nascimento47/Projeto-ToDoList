import BotaoDeleta from './deletaTarefa.js'
import BotaoConclui from './concluiTarefa.js'


export const handleNovoItem = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valorInput = input.value
    const calendario = document.querySelector('[data-form-date]')
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY')
    
    
    const dados = {
        valorInput, dataFormatada
    }
    
    const tarefasAtualizadas = [ ...tarefas, dados]

    const criaTarefa = Tarefa(dados)

    lista.appendChild(criaTarefa)

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

    input.value = " "

}

export const Tarefa = ({valorInput, dataFormatada}) => {
        
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')    
    const conteudo = `<p class="content">${dataFormatada} * ${valorInput}</p>`
        
    tarefa.innerHTML = conteudo

    const dados = {
        valorInput, dataFormatada
    }
    
    tarefa.appendChild(BotaoConclui())
    tarefa.appendChild(BotaoDeleta())
    
    return tarefa
};
