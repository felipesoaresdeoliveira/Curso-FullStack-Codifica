
class Node {
    constructor(valor) {
        this.valor = valor
        this.proximo = null
        this.anterior = null
    }
}


class DoublyLinkedList{
    constructor() {
        this.head = null
        this.tail = null
    }

    inserirInicio(valor) {
        let novoNo = new Node(valor)
        if (!this.head) {
            this.head = this.tail = novoNo
        }
        this.head = novoNo
    }

    imprimirFim(valor){
       let novo = new Node(valor)
       if(!this.tail) {
            this.head = this.tail = novo
        }	else {
            this.tail.proximo = novo
            novo.anterior = this.tail
            this.tail = novo
        }

        this.lenth++
    }

    inserirEm(indice, valor){
        if (indice < 0 || indice > this.lenth) throw new RangeError("Índice fora dos Limites")
        if (indice === 0) return this.inserirInicio(valor)

        let atual = this.head
        for (let i = 0; i < indice; i++) {
            atual = atual.proximo
        }

        let novo = new Node(valor)
        let noAnterior = atual.anterior

        noAnterior.proximo = novo
        novo.anterior = noAnterior
        novo.proximo = atual
        atual.anterior = novo

        this.lenth++
    }

    imprimirFrente(){

    }

    imprimirAtras(){

    }

}

