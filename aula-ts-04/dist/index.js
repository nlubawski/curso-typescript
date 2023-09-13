function multiply(num1, num2) {
    return num1 * num2;
}
function sum(num1, num2) {
    return num1 * num2;
}
function isEven(num) {
    return num % 2 === 0;
}
function showResult(result) {
    if (isEven(result)) {
        console.log("The result is ".concat(result, " and it's even!"));
    }
    else {
        console.log("The result is ".concat(result, " and it's even!"));
    }
}
(function () {
    var num1aux = prompt("First Number");
    var num2aux = prompt("Second Number");
    var num1 = parseFloat(num1aux);
    var num2 = parseFloat(num2aux);
    if (!isNaN(num1) && !isNaN(num2)) {
        var result = sum(num1, num2);
        result += multiply(1, 2);
        showResult(result);
    }
})();
