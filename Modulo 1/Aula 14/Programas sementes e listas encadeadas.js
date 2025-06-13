class node { 
    constructor(valor){
        this.valor = valor
        this.proximo = null
    }
}

class SymplyLinkedList{
    constructor(){
        this.head = null
    }

    inserirInicio(V){
        let novo = new node(V)
        novo.proximo = this.head
    }

    imprimir(){
        let atual = this.head
        let str = " "
        while(atual){
            str += atual.valor + " -> "
            atual = atual.proximo
        }
        str += "null"
        console.log(str)
    }

}

const lista = new SymplyLinkedList()
// Exemplo de código para criar uma classe de carro e instanciar objetos

lista.inserirInicio(10)
lista.inserirInicio(20)
lista.inserirInicio(30)
lista.inserirInicio(40)
lista.imprimir()


// class car { 
//     constructor(nome, modelo, cor, ano){
//         this.nome = nome
//         this.modelo = modelo
//         this.cor = cor
//         this.ano = ano
//     }
// }

// let car1 = new car("Fusca", "Fusca 1300", "azul", 1976)
// let car2 = new car("Civic", "Civic 1.5 Turbo", "preto", 2020)
// let car3 = new car("Corsa", "Corsa 1.0", "branco", 2005)

// console.log(car1)
// console.log(car2)  
// console.log(car3)