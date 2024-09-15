let array = [5, 20, 4, 1, 3, 98, 8, 55, 13, 22, 22]

function bubble_sort(array){
    let len = array.length
    while(len > 1){
        len--
        for(let i = 0 ; i < len ; i++){
            if(array[i] > array[i + 1]){
                [array[i] , array[i + 1]] = [array[i + 1] , array[i]]
            }
        }
    }
    return array
}

console.log(bubble_sort(array))