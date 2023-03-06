function fibonacci(x) {
    if (x <= 1) {
        return x;
    }
    else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}
var number = 10;
var count = 0;
console.log("Da\u1EF9 ".concat(number, " s\u1ED1 fibonacci l\u00E0: "));
for (var i = 0; i < number; i++) {
    console.log(fibonacci(i));
    count += fibonacci(i);
}
console.log("T\u1ED5ng ".concat(number, " s\u1ED1 fibonacci l\u00E0: ").concat(count));
