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
console.log(`Daỹ ${number} số fibonacci là: `);
for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
    count += fibonacci(i);
}
console.log(`Tổng ${number} số fibonacci là: ${count}`);
//# sourceMappingURL=fibonacci.js.map