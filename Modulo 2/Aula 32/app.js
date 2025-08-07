const formAdd = document.getElementById('todo-form')
const inputItem = document.getElementById('todo-input')
const listaItem = document.getElementById('todo-list')
const btnLimpar = document.getElementById('clear-todos')
const contagemComprados = document.getElementById('contagem')

let itens = []
let itensComprados = []

// Carregar dados do localStorage
window.addEventListener('DOMContentLoaded', () => {
    const dadosSalvos = localStorage.getItem('listaCompras')
    if (dadosSalvos) {
        itens = JSON.parse(dadosSalvos)
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
        li.textContent = item.nome
        if (item.comprado) {
            li.style.textDecoration = 'line-through'
            li.style.color = 'gray'
        }

        const btnComprar = document.createElement('button')
        btnComprar.textContent = item.comprado ? 'Comprado' : 'Comprar'
        btnComprar.addEventListener('click', () => {
            itens[index].comprado = !itens[index].comprado
            if (itens[index].comprado) {
                itensComprados.push(itens[index])
            } else {
                itensComprados = itensComprados.filter(i => i.nome !== itens[index].nome)
            }
            salvarDados()
            renderLista()
        })

        const btnRemover = document.createElement('button')
        btnRemover.textContent = 'X'
        btnRemover.addEventListener('click', () => {
            removerItem(index)
        })

        li.appendChild(btnComprar)
        li.appendChild(btnRemover)
        listaItem.appendChild(li)
    })
}

formAdd.addEventListener('submit', (event) => {
    event.preventDefault()
    const novoItem = inputItem.value.trim()
    if (novoItem === '') return
    itens.push({ nome: novoItem, comprado: false })

    salvarDados()
    renderLista()

    inputItem.value = ''
})

function removerItem(index) {
    itens.splice(index, 1)
    salvarDados()
    renderLista()
}

function atualizarContagem() {

}

btnLimpar.addEventListener('click', () => {
    if (confirm('Você tem certeza que deseja limpar a lista?')) {
        itens = []
        salvarDados()
        renderLista()
    }
})