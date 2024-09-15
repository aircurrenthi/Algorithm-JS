class Queue{
    constructor(){
        this.list = []
    }

    enqueue(data){
        this.list.push(data)
    }

    dequeue(data){
        this.list.shift(data)
    }

    peek(){
        return this.list[0]
    }

    size(){
        return this.list.length
    }
}

let queue = new Queue()
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
console.log(queue.size())//3
console.log(queue.peek())//20
queue.dequeue()
console.log(queue.peek())//30