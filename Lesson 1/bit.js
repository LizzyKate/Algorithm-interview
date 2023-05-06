function countBits(n) {
    return n.toString(2).split("1").length - 1;
}

console.log(countBits(1234));