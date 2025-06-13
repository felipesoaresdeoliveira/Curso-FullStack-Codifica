// class node {
//     constructor(value){
//         this.value = value
//         this.next = null
//     }
// }

// class Stack{
//     constructor(){
//         this.top = null
//     }

//     push(value){
//         let newNode = new node(value)
//         newNode.next = this.top
//         this.top = newNode
//     }

//     pop(){
//         if(!this.top) return null
//         let poppedNode = this.top.value
//         this.top = this.top.next
//         return poppedNode
//     }

//     peek(){
//         if (!this.top) return null
//         return this.top.value
//     }

//     isEmpty(){
//         return this.top === null
//     }
// }


// function Stack(){
//     this.items = []
//     this.top = -1

//     this.push = function(element){
//     this.top++
//     this.items[this.top] = element
//     }

//     this.pop = function(){
//         if(this.top < 0) return null
//         let element = this.items[this.top]
//         this.items[this.top] = undefined
//         this.top--
//         return element
//     }
// }


                                                                                            /* FILAS */

class node {
    constructor(valor){
        this.valor = valor
        this.proximo = null
    }
}

class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }

    enqueue(valor) {
        let novoNo = new node(valor)
        if (this.rear) {
            this.rear.next = novoNo
            return
        }
        this.rear = novoNo
        if (!this.front) {
            this.front = novoNo
        }

        this.size++
    }

    dequeue(){
        if (!this.front) return null
        let valor = this.front.valor
        this.front = this.front.proximo
        if (!this.front) {
            this.rear = null
        }
        this.size--
        return valor
    }
}
