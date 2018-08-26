function getClosestToZero(...arr) {
    let absoluteArr = arr.map(num => Math.abs(num));
    return arr[absoluteArr.indexOf(Math.min(...absoluteArr))];
}