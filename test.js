let num = ['1','2','3','/','4','5','6','=']

let a = ''
let b = ''
let op 

function NumsAndOp(array) {
    


    const ind = array.findIndex(element => isNaN(parseInt(element)))
    

    a = array.slice(0, ind).join('')
    b = array.slice(ind + 1, -1).join('')

    op = array[ind]


    return a, b, op

}

a, b, op = NumsAndOp(num)

console.log(a)

console.log(NumsAndOp(num))



