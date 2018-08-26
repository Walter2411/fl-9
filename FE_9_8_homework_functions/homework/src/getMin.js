function getMin(...arr) {
    let minNum = arr[0];
    for(let i=1; i<arr.length; i++){
        if(arr[i] < minNum){
            minNum = arr[i];
        }
    }
    return minNum;
}