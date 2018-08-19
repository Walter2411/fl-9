// Your code goes here
let a_length = prompt('Enter a length of triangle: ', '10');
let b_length = prompt('Enter b length side of triangle', '20');
let angle = prompt('Enter angle of triangle','30');
let result;

let translate_rad = angle*Math.PI/'180';

let c_length=Math.sqrt(Math.pow(a_length,2)+
+Math.pow(b_length,2)-2*a_length*b_length*Math.cos(translate_rad));

let perimeter = Number(a_length) + Number(b_length) + Number(c_length);

let half_perimetr = perimeter/2;
let square= Math.sqrt(half_perimetr*(half_perimetr-a_length)*(half_perimetr-b_length)*(half_perimetr-c_length));


if (a_length<=0){
   
    result='Invalid data';
}else{
        result='c length: ' + +c_length.toFixed(2) + '\n' + 'Triangle square: ' + +square.toFixed(2) + '\n' +
        'Triangle perimeter: ' + +perimeter.toFixed(2);
    }
console.log(result);
