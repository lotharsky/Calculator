/*
    Fix divide by 0 -> final
*/



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


let currentValue = ""
let previousValue = ""
let operator = null

const btn = document.querySelectorAll("Button")
const clearBtn = document.querySelector("#clearBtn")
const display = document.querySelector("#calcResult")

btn.forEach(button => {
    button.addEventListener("click", event => {


        if(!isNaN(Number(event.target.textContent))) {
            console.log("joepie")
            currentValue += event.target.textContent
            console.log(currentValue)
            display.textContent = currentValue
        } 
        
        else if (isNaN(Number(event.target.textContent))) {

            if (previousValue === "") {
                previousValue = currentValue
                currentValue = ""
                operator = event.target.textContent

                console.log(previousValue, operator)
                
            } 

            else if (["+", "-", "x", "/"].includes(event.target.textContent)) {
                if (currentValue === "") {
                    operator = event.target.textContent
                    return;
                }
               
                else if (operator === "/" && Number(currentValue) === 0) {
                    display.textContent = "Do not divide by 0 Bitch"
                    currentValue = ""
                    previousValue = ""
                    operator = null
                } else {

                    let result = operate(Number(previousValue), Number(currentValue), operator)
                    operator = event.target.textContent
                    previousValue = result
                    currentValue = ""
                    display.textContent = result

                }

                

            }

            else if (event.target.textContent === "=") {
                if(operator === "/" && Number(currentValue) === 0) {
                    console.log("Bitch")
                    display.textContent = "Bitch"
                } else {
                    let result = operate(Number(previousValue), Number(currentValue), operator)
                    display.textContent = result
                    console.log("=", result)
                }

            }

            else if (event.target.textContent === "C") {

                console.log("it works")

                previousValue = ""
                currentValue = ""
                operator = ""
                display.textContent = "0"
            }
            
            console.log(previousValue)
            console.log(operator)
        }

        

    })
})

