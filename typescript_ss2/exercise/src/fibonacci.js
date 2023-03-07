function fibonacci(num) {
    if (num <= 1) {
        return num;
    }
    else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}
var num = 10;
var count = 0;
console.log("\u0110\u00E2y l\u00E0  d\u00E3y ".concat(num, " s\u1ED1 fibonacci l\u00E0   : "));
for (var i = 0; i < num; i++) {
    console.log(fibonacci(i));
    count += fibonacci(i);
}
console.log("T\u1ED5ng ".concat(num, " s\u1ED1 fibonacci l\u00E0: ").concat(count));
