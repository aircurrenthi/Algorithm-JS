class QuqeueNode{
    constructor(data){
        this.data = data
        this.list = null
    }
}

class LinkedQueue{
    constructor(){
        this.front = null   //最前面
        this.rear = null    //最後面
        this.length = 0
    }

    enqueue(data){
        let temp = new QuqeueNode(data)
        if(this.rear === null){
            this.front = temp
            this.rear = temp
        }else{
            this.rear.next = temp
            this.rear = temp
        }
        this.length ++
    }

    dequeue(){
        if(!this.front){
            return null
        }
        if(this.front === this.rear){
            this.rear = null
        }
        this.front = this.front.next
        this.length --
    }

    peek(){
        if(this.length > 0){
            return this.front.data
        }else{
            return null
        }
        
    }

    size(){
        return this.length
    }
}

let queue = new LinkedQueue()
queue.enqueue('20')
queue.enqueue('30')
queue.enqueue('40')
console.log(queue.peek()) //"20"
console.log(queue.size()) //3
queue.dequeue()
console.log(queue.peek()) //"30"
console.log(queue.size()) //2
queue.dequeue()
console.log(queue.peek()) //"40"
console.log(queue.size()) //1
queue.dequeue()
console.log(queue.peek()) //null