let arr=[];
//let arr = [2,5,8];

function findType(data){
    return typeof data;
 }
 console .log(findType('number'));
 console.log('task 1' + '\n'+ ' ');
 
 //2
 function forEach(arr,exec){
     let index = 0;
    for (index; index < arr.length; ++index) {
       exec(arr[index]);
   }
    }
    forEach(arr,function(el){
        console.log(el);
    });
    console.log('task 2' + '\n'+ ' ');

//3
const additionalNumber = 3;
function map(arr, exec) {
    let newArray = [];
    forEach(arr, function (number, index){
        newArray[index] = exec(number, index, arr);
    });
    return newArray;
}

console.log(map(arr, function (el) {
   console.log(el+additionalNumber) ;
}));
console.log('task 3' + '\n'+ ' ');

//4
const compareNumber = 3;
function filter(arr, exec) {
    let newArr = [];
    forEach(arr, function(number, index){
        if (exec(number, index, arr)) {
            newArr[newArr.length] = number;
        }
    });
        return newArr;
}

console.log(filter(arr, (number) => number > compareNumber));
console.log('task 4' + '\n'+ ' ');

//5 
let dataBase = [
    {
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'age': 39,
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'age': 38,
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'age': 2,
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'age': 17,
        'eyeColor': 'green',
        'name': 'Weiss',
        'favoriteFruit': 'banana'
    }
];
function getAdultAppleLovers(info) {
    let filterList = filter(info, function (element) {
        return element.favoriteFruit === 'apple' && element.age >= 18;
    });
    let findName = map(filterList, function (item) {
        return item.name;
    });
        return findName;
}
console.log(getAdultAppleLovers(dataBase));
console.log('task 5' + '\n'+ ' ');

//6
function keys(obj) {
    let newArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr[newArr.length] = key;
        }
    }
    return newArr;
}
console.log(keys({keyOne: 1, keyTwo: 2, keyThree: 3}));
console.log('task 6' + '\n'+ ' ');

//7
function values(obj) {
    let newArr = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            newArr[newArr.length] = obj[key];
        }
    }
    return newArr;
}

console.log(values({keyOne: 1, keyTwo: 2, keyThree: 3}));

//8
function showFormattedDate(date) {
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    return `It is ${day} of ${months[monthIndex]}, ${year}`;
}

console.log(showFormattedDate(new Date('2018-08-27T01:10:00')));