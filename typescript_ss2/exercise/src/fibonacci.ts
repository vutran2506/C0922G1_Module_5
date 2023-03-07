function fibonacci(num: number):number {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

let num:number =10;
let count :number = 0;
console.log(`Đây là  dãy ${num} số fibonacci là   : `)
for (let i = 0; i < num; i++) {
    console.log(fibonacci(i));
    count += fibonacci(i);
}
console.log(`Tổng ${num} số fibonacci là: ${count}`);