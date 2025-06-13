class treeNode {
    constructor(value) {
        this.value = value
        this.children = []
    }

    addChild(node) {
        this.children.push(node)
    }

    removeChild(value) { 
        this.children = this.children.filter(child => child.value !== value)
    }
}

class Tree {
    constructor(rootValue){
        this.root = new treeNode(rootValue)
    }

    traverseDFS(callback) {
        function recurse(node){
            callback(node)
            node.children.forEach(child => recurse(child))
        }

        recurse(this.root)
    }
}

//raiz
const tree = new Tree('A')

//criação dos nós
const B = new treeNode('B')
const C = new treeNode('C')
const D = new treeNode('D')
const E = new treeNode('E')
const F = new treeNode('F')
const G = new treeNode('G')
const H = new treeNode('H')

//montagem da árvore
tree.root.addChild(B)
tree.root.addChild(C)
tree.root.addChild(D)

//montagem dos filhos
B.addChild(E)
B.addChild(F)

C.addChild(G)

F.addChild(H)

function printNode(node){
    console.log(node.value)
}

// Função para imprimir a árvore
console.log('_______Busca em profundidade_______')
tree.traverseDFS(printNode) // use printNode as callback
