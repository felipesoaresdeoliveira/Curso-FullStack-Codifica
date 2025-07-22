const formAdd = document.getElementById('todo-form')
const inputItem = document.getElementById('todo-input')
const listaItem = document.getElementById('todo-list')
const btnLimpar = document.getElementById('clear-todos')

let itens = []

// Carregar dados do localStorage
window.addEventListener('DOMContentLoaded', () => {
    const dadosSalvos = localStorage.getItem('listaCompras')
    if (dadosSalvos) {
        itens = JSON.parse(dadosSalvos)
        renderLista()
    }
   
    const salvarComprados = localStorage.getItem('itensComprados')
    if (salvarComprados) {
        itens = JSON.parse(salvarComprados)
        renderLista()
    }

})


function salvarDados() {
    localStorage.setItem('listaCompras', JSON.stringify(itens))
}

function renderLista() {
    listaItem.innerHTML = ''
    itens.forEach((item, index) => {
        const li = document.createElement('li')
        li.textContent = item

        const btnRemover = document.createElement('button')
        btnRemover.textContent = 'X'
        btnRemover.addEventListener('click', () => {
            removerItem(index)
        })

        li.appendChild(btnRemover)
        listaItem.appendChild(li)
    })
}

formAdd.addEventListener('submit', (event) => {
    event.preventDefault()
    const novoItem = inputItem.value.trim()
    if (novoItem === '') return
    itens.push(novoItem)

    salvarDados()
    renderLista()

    inputItem.value = ''
})

function removerItem(index) {
    itens.splice(index, 1)
    salvarDados()
    renderLista()
}


btnLimpar.addEventListener('click', () => {
    if (confirm('Você tem certeza que deseja limpar a lista?')) {
        itens = []
        salvarDados()
        renderLista()
    }
})