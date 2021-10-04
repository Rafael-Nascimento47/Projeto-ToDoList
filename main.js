import { handleNovoItem } from "./js/criaTarefa.js"
import { carregaTarefa } from "./js/carregaTarefa.js"
const novaTarefa = document.querySelector('[data-form-button]')

 novaTarefa.addEventListener('click', handleNovoItem)

 carregaTarefa()