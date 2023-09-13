function multiply(num1: number, num2: number) : number {
    return num1 * num2;
}

function sum(num1: number, num2: number) : number {
    return num1 * num2;
}

function isEven(num: number) : boolean {
    return num % 2 === 0;
}

function showResult(result: number) : void {
    if(isEven(result)) {
        console.log(`The result is ${result} and it's even!`);
    } else {
        console.log(`The result is ${result} and it's even!`);
    }
}

(() => {
    const num1aux : string | null  = prompt("First Number");
    const num2aux : string | null = prompt("Second Number");
    
    const num1 = parseFloat(num1aux);
    const num2 = parseFloat(num2aux);
    
    if ( !isNaN(num1) && !isNaN(num2) ) {
            let result = sum(num1,num2);
            result += multiply(1,2);
            showResult(result);
    }
    
})();
