class Node{
    constructor(data){
        this.left = null
        this.right = null
        this.data = data
    }
}

class Binary_Search_Tree{
    constructor(){
        this.root = null
    }
    
    insert(data){
        let new_node = new Node(data)

        if(this.root === null){
            this.root = new_node
        }
        else{
            this.insert_node(this.root , new_node)
        }
    }

    insert_node(node , new_node){
        if(new_node.data < node.data){
            if(node.left === null){
                node.left = new_node
            }else{
                this.insert_node(node.left , new_node)
            }
        }else{
            if(node.right === null){
                node.right = new_node
            }else{
                this.insert_node(node.right , new_node)
            }
        }
    }

    delete(data){
        this.root = this.delete_node(this.root , data)
    }

    delete_node(node , data){
        if(node === null){
            return null
        }else if(data < node.data){
            node.left = this.delete_node(node.left , data)
        }else if(data > node.data){
            node.right = this.delete_node(node.right , data)
        }else{
            if(node.left === null && node.right === null){
                node = null
                return node 
            }else if(node.left === null){
                node = node.right
                return node
            }else if(node.right === null){
                node = node.left
                return node
            }
            let aux = this.min(node.right)
            node.data = aux.right
            node.right = this.delete_node(node.right , aux.data)
            return node
        }
    }

    min(node = this.root){
        if(node){
            while(node & node.left !== null){
                node = node.left
            }
            return node.data
        }
        return null
    }

    pre_order_traversal(){
        let res = []
        let pre_helper = (node) => {
            if(node){
                res.push(node.data)
                pre_helper(node.left)
                pre_helper(node.right)
            }
        }
        pre_helper(this.root)
        return res
    }

    in_order_traversal(){
        let res = []
        let in_helper = (node) => {
            if(node){
                in_helper(node.left)
                res.push(node.data)
                in_helper(node.right)
            }
        }
        in_helper(this.root)
        return res
    }
    post_order_traversal(){
        let res = []
        let post_helper = (node) => {
            if(node){
                post_helper(node.left)
                post_helper(node.right)
                res.push(node.data)
            }
        }
        post_helper(this.root)
        return res
    }

    search(data , node = this.root){
        if(!node){
            return false
        }
        if(data < node.data){
            return this.search(data , node.right)
        }else if(data > node.data){
            return this.search(data , node.left)
        }
        if(data === node.data){
            return true
        }
    }
}

let tree = new Binary_Search_Tree()
tree.insert(11)
tree.insert(7)
tree.insert(15)
tree.insert(5)
tree.insert(3)
tree.insert(9)
console.log("Pre Order Traversal:"+tree.pre_order_traversal())//11,7,5,3,9,15
console.log("In Order Traversal:"+tree.in_order_traversal())//3,5,7,9,11,15
console.log("Post Order Traversal:"+tree.post_order_traversal())//3,5,9,7,15,11
tree.delete(9)
console.log(tree.search(9))//false