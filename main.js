function isSymmetrical(num) {
    // Convert the number to a string
    let strNum = num.toString();
    
    // Reverse the string and compare it with the original
    return strNum === strNum.split("").reverse().join("");
}
