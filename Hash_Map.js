function hash(key , size){
    let hash_code = 0
    for(let index in key){
        hash_code += key.charCodeAt(index)
    }
    return hash_code % size
}

class Node{
    constructor(key , value){
        this[key] = value
        this.next = null
    }
}

class Linked_List{
    constructor(node){
        this.head = node
        this.count = 0
    }
}

class Hash_Table{
    constructor(){
        this.size = 5
        this.values = new Array(this.size).fill(null)
        this.length = 0
    }

    add(key , value){
        let hashIndex = hash(key , this.size)
        let node = new Node(key , value)

        if(!this.values[hashIndex]){
            this.values[hashIndex] = new Linked_List(node)
        }else{
            let current = this.values[hashIndex].head
            while(current.next){
                current = current.next
            }
            current.next = node
        }
        this.values[hashIndex].count++
        this.length ++
    }

    search(key){
        let index = hash(key , this.size)
        let slot = this.values[index]
        let current = slot.head
        if(current.hasOwnProperty(key)){
            return current[key]
        }
        while(current.next){
            if(current.next.hasOwnProperty(key)){
                return current.next[key]
            }else{
                current = current.next
            }
        }
        return "Data Not Found"
    }

    remove(key){
        let index = hash(key , this.size)
        let slot = this.values[index]
        let current = slot.head

        if(current.hasOwnProperty(key)){
            slot.head = current.next
            slot.count --
            this.length --
            return "Data was deleted successfully"
        }
        while(current.next){
            if(current.next.hasOwnProperty(key)){
                current.next = current.next.next
                slot.count --
                this.length --
                return "Data was deleted successfully"
            }else{
                current = current.next
            }
        }
        return "Data is not exhausting"
    }
}

const ht = new Hash_Table();

ht.add("John", "111-111-111");
ht.add("Taylor", "222-222");
ht.add("Krish", "333-333");
ht.add("Mack", "444-444");
ht.add("Den", "555-555");
ht.add("Mike", "666-666");
ht.add("John", "77-77");
ht.add("Jack", "88-88-88");
ht.add("Jimmy", "99-99");
ht.add("Harry", "121-121");
ht.add("Meet", "232-232");
ht.add("Miraj", "454-454");
ht.add("Milan", "567-567");
console.log(ht.values)
console.log(ht.search("Den"));//555-555
console.log(ht.search("Miraj"));//454-454
console.log(ht.search("Drupel"));//Data not found
console.log(ht.remove("Krish"));//Data was deleted successfully
console.log(ht.remove("Mack"));//Data was deleted successfully
console.log(ht.remove("Meet"));//Data was deleted successfully
console.log(ht.remove("Taylor"));//Data was deleted successfully
console.log(ht.remove("JsMount"));//Data is not exhausting
console.log(ht.values);