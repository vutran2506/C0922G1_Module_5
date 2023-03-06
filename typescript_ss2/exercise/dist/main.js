function fibonacci(x) {
    if (x <= 1) {
        return x;
    }
    else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}
let number = 10;
let count = 0;
for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
    count += fibonacci(i);
}
console.log(count);
//# sourceMappingURL=main.js.map