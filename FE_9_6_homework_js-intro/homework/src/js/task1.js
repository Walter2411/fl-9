let MoneyNumber = prompt('Enter amount of your money', '4950');
let DiscountNumber = prompt('Enter number of your discount', '30');
let Saved = MoneyNumber/100*DiscountNumber;
let PriceWithDiscount = MoneyNumber-Saved;
let Result;

if (Number(MoneyNumber)<0||Number(DiscountNumber<0)){
    Result = 'Invalid data';
}else{
    Result='price without discount: '+ MoneyNumber + '\n' +
'Discount: ' +DiscountNumber+'%' + '\n' + 'Price with discount: ' + PriceWithDiscount + '\n' + 'Saved: ' + Saved;
}
console.log(Result);
