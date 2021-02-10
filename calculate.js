function calculate () {
    
    const firstNumber = Number(document.getElementById("firstNumber").value)
    const secondNumber = Number(document.getElementById("secondNumber").value)
    const operation = document.getElementById("operation").value
    let result;

    console.log(firstNumber, operation, secondNumber)
 
    switch (operation){
        case "+" :
            result = firstNumber + secondNumber;
            break;
        case ">=" :
            result = firstNumber >= secondNumber;
            break;

            case "*" :
            result = firstNumber * secondNumber;
            break;

            case "/" :
            result = firstNumber / secondNumber;
            break;

            case "<=" :
            result = firstNumber <= secondNumber;
            break;

            case "=" :
                result = firstNumber == secondNumber;
                break;

            default: result="Unknow Operation"
    }

    document.getElementById("result").value = result

 }