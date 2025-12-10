function squareDigits(num) {
    return Number(
        String(num)
            .split("")
            .map(digit => digit ** 2)
            .join("")
    );
}

console.log(squareDigits(3212)); 