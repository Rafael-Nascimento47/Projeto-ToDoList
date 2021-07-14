const criarTarefa = (evento) => {
    
    evento.preventDefault()
    const input = document.querySelector('[data-form-input]')
    const valorInput = input.value
    console.log(valorInput)
    input.value = " "

}

const novaTarefa = document.querySelector('[data-form-button]')

novaTarefa.addEventListener('click', criarTarefa)