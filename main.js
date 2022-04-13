function checkPrime(number) {
    let count = 0;
    if (number < 2)
        return false
    if (number === 2)
        return true
    if (number % 2 === 0)
        return false
    for (let i = 2; i < number; i++) {
        if (number % i === 0)
            return false
    } return true;
}
for (let j = 0; j < 1001; j++) {
    if (checkPrime(j) === true) {
        document.write(j + "<br>");
    }
}
