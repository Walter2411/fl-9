function reverseNumber(num) {
    if (num < 0) {
        return -reverseNumber(-num);
    }
    let strNum = num.toString();
    let strArray = strNum.split('');
    let revArray = strArray.reverse();
    let rev = revArray.join('');
    return parseFloat(rev);
}