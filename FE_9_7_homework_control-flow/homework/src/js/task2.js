// Your code goes here

let minRangeNumber=0;
let maxRangeNumber=5;
let totalPrize=0;
let startPrice=10;
let possiblePrice;
let randomRange=6;
let firstAttamps=1;

let question = confirm('Do you want to play a game?')
let RandomNumber = Math.floor(Math.random() * randomRange);
    console.log(RandomNumber);


if(question){
    let i=3;
    while(i>0){
        possiblePrice=Math.floor(startPrice / Math.pow(2, 3 - i));
        let UserNumber = prompt('Please Enter your number from ' + minRangeNumber + ' to ' +maxRangeNumber +'\n'+
        'Attempts left: '+ i + '\n'+ 'Total prize: '+totalPrize + '\n'+
        'Possible price on current attempt: '+possiblePrice);

        if (Number(UserNumber)===RandomNumber&&i===firstAttamps){
                
                if (confirm('Congratulation!   Your prize is: '+possiblePrice+ ' Do you want to continue?')===true){
                    let randomRange=11;
                    RandomNumber = Math.floor(Math.random() * randomRange);
                    console.log(RandomNumber);
                    startPrice = startPrice*3;
                    totalPrize = possiblePrice;
                    possiblePrice=Math.floor(startPrice / Math.pow(2, 3 - i));  
                    
                }else{
                    alert('Thank you for a game. Your prize is: ' + possiblePrice + '$');
                }
         break;
        }else if (Number(UserNumber)===RandomNumber&&i===2){
                if (confirm('Congratulation!   Your prize is: '+possiblePrice+ ' Do you want to continue?')===true){
                    let randomRange=11;
                    RandomNumber = Math.floor(Math.random() * randomRange);
                    console.log(RandomNumber);
                    startPrice = startPrice*3;
                    totalPrize = possiblePrice;
                    possiblePrice=Math.floor(startPrice / Math.pow(2, 3 - i));
                    
                   
                    
                
                 }else{
                    alert('Thank you for a game. Your prize is: ' + possiblePrice + '$');
                }
         break;
        }else if (Number(UserNumber)===RandomNumber&&i===3){
                if (confirm('Congratulation!   Your prize is: '+possiblePrice+ ' Do you want to continue?')===true) {
                    let randomRange=11;
                    RandomNumber = Math.floor(Math.random() * randomRange);
                    console.log(RandomNumber);
                    startPrice = startPrice*3;
                    totalPrize = possiblePrice;
                    possiblePrice=Math.floor(startPrice / Math.pow(2, 3 - i));
                    
                }else{
                        alert('Thank you for a game. Your prize is: ' + possiblePrice + '$');
                }
        break;
        }else{
          
            alert('Thank you for a game. Your prize is: ' + totalPrize);
            // confirm('do you want play again?')
            
        }
        i--;
    }
   
}else{
    alert('You did not become a millionaire, but can.');
}




