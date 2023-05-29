let action1 = function (number1) {
    let action2 = function (number2) {
        return number1 + number2;
    }
    return action2(3);
}
result = action1(4);
console.log(result);
