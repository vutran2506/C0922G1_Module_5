function fibonacci(x: number):number {
    if (x <= 1) {
        return x;
    } else {
        return fibonacci(x - 1) + fibonacci(x - 2);
    }
}

let number:number =10;
let count :number = 0;
console.log(`Daỹ ${number} số fibonacci là: `)
for (let i = 0; i < number; i++) {
    console.log(fibonacci(i));
    count += fibonacci(i);
}
console.log(`Tổng ${number} số fibonacci là: ${count}`);