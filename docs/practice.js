const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const button = document.getElementById("button");



const head = document.getElementById("head");

button.addEventListener("click", () => {
    let a = parseInt(input1.value);
    let b = parseInt(input2.value);

    const multiply = document.getElementById("add");
    const addition = document.getElementById("mul");

    multiply.innerHTML = a * b;
    addition.innerHTML = a + b;


    






})