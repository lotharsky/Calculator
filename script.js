function addition(a, b) {
    return a + b;
};

function subtraction(a, b) {
    return a - b;
};

function multiplication (a, b){
    return a*b;
}

function division (a, b) {
    return a / b;
};

function operate (num1, num2, operator){
    if(operator === "+") {
        return addition(num1, num2)
    }
    else if (operator === "-") {
        return subtraction(num1, num2)
    }
    else if (operator === "x") {
        return multiplication(num1, num2)
    }
    else if (operator === "/") {
        return division(num1, num2)
    } else {return "ERROR: Operator does not exist"}
}

function NumsAndOp(array) {

    const ind = array.findIndex(element => isNaN(parseInt(element)))
    

    const num1 = array.slice(0, ind).join('')
    const num2 = array.slice(ind + 1, -1).join('')

    let op = array[ind]


    return [num1, num2, op]

}


let test = []

const btn = document.querySelectorAll("Button")
const clearBtn = document.querySelector("#clearBtn")
const display = document.querySelector("#calcResult")

btn.forEach(button => {
    button.addEventListener("click", event => {
        console.log(event.target.textContent)

        test.push(event.target.textContent)
        display.textContent += event.target.textContent

        if (event.target.textContent === "=") {
            
            console.log("disabled")
            btn.forEach(element => {
                element.disabled = true
            });

            clearBtn.disabled = false

            console.log(test)
            let [an, bn, operator] = NumsAndOp(test)

            an = Number(an);
            bn = Number(bn);

            console.log(an, bn, operator)


            const result = operate(an, bn, operator)

            display.textContent = result
            console.log(operate(an, bn, operator))

        }


        if (event.target.textContent === "C") {
            display.textContent = ""

            btn.forEach(element => {
                test = []
                element.disabled = false
            })
        }

    })
})

