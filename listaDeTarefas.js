const criarTarefa = (evento) => {
    
    evento.preventDefault()

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]')
    const valorInput = input.value
    
    const tarefa = document.createElement('li')
    tarefa.classList.add('task')
    
    const conteudo = `<p class="content">${valorInput}</p>`

    tarefa.innerHTML = conteudo
    tarefa.appendChild(BotaoConclui())
    lista.appendChild(tarefa)
    input.value = " "
}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)

const BotaoConclui = () => {
    
    const botaoConclui = document.createElement('button')
    botaoConclui.classList.add('check-button')
    botaoConclui.innerText = 'Concluir'

    botaoConclui.addEventListener('click', concluirTarefa)
    return botaoConclui
}

const concluirTarefa = (evento) => {
    const botaoConclui = evento.target
    const tarefaConcluida = botaoConclui.parentElement

    tarefaConcluida.classList.toggle('done')

}   