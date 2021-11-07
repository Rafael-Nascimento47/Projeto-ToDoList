import BotaoDeleta from './deletaTarefa.js'
import BotaoConclui from './concluiTarefa.js'
import { carregaTarefa } from './carregaTarefa.js'


export const handleNovoItem = (evento) => {
    evento.preventDefault()
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || []
    const input = document.querySelector('[data-form-input]')
    const calendario = document.querySelector('[data-form-date]')
    const lista = document.querySelector('[data-list]')
    
    const data = moment(calendario.value)
    const dataFormatada = data.format('DD/MM/YYYY')

    const horario = data.format('HH:mm')

    const concluida = false
    
    const valorInput = input.value
    
    const dados = {
        valorInput, dataFormatada, horario,  concluida
    }
    
    const tarefasAtualizadas = [ ...tarefas, dados]
    const criaTarefa = Tarefa(dados)

    lista.appendChild(criaTarefa)

    localStorage.setItem("tarefas", JSON.stringify(tarefasAtualizadas))

    input.value = " "

    carregaTarefa()
}

export const Tarefa = ({valorInput, horario, concluida}, id) => {
        
    
    const tarefa = document.createElement('li')
        
    const conteudo = `<p class="content">${horario} * ${valorInput}</p>`
    
    if(dataFormatada == "Invalid date") {
        BotaoDeleta(carregaTarefa,id)
    }


    if ( concluida ){
        tarefa.classList.add('done')
    }
    tarefa.classList.add('task')

    tarefa.innerHTML = conteudo
    
    tarefa.appendChild(BotaoConclui(carregaTarefa, id))
    tarefa.appendChild(BotaoDeleta(carregaTarefa, id))
    
    return tarefa
};
