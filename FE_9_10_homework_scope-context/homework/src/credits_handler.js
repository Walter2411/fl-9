function UserAccount(name){
    
    this.name=name;
    this.cards=[];
    this.addCard=function addCard(){
        const maxCards=3;
        if(this.cards.length>=maxCards){
            console.log('error');
        }else{
            this.cards.push(userCard())
        }
    }
    this.getCardByKey=function getCardByKey(getCardByKeyNumber){
        
            return this.cards[getCardByKeyNumber-1];
    }
}

//const user = new UserAccount('Bob');

const userCard=function UserCard(key){
    
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs=[];
    
    //Get Card Option function
    
    this.getCardOptions = function getCardOptions(){
      return {key , balance , transactionLimit,historyLogs}
       
    }
    //Put credits function
    this.putCredits=function putCredits(creditsNumber){
        balance=balance+creditsNumber;
        historyLogs.push({
            operationType: 'Received Credits',
            credits: creditsNumber,
            operationTime: new Date().toLocaleString()
        });
    }
    //Set transaction limit function
    this.setTransactionLimit=function setTransactionLimit(limitNumber){
        transactionLimit=limitNumber;
        historyLogs.push({
            operationType: 'Transaction limit change',
            credits: limitNumber,
            operationTime: new Date().toLocaleString()
        })
    }
   
    //Take Credits function
    this.takeCredits = function takeCredits(takeCreditsNumber){
        if(takeCreditsNumber>=this.transactionLimit){
            console.log('error')
        }else{
            balance=balance-takeCreditsNumber;
            historyLogs.push({
                operationType: 'Withdrawal of Credits',
                credits: takeCreditsNumber,
                operationTime: new Date().toLocaleString()
            })
        }
    }
     // Transfer Credits
     this.transferCredits = function transferCredits(transferNumber, cardNumber){
         const taxes = 200;
        this.takeCredits(transferNumber=transferNumber+transferNumber/taxes);
        cardNumber.putCredits(transferNumber);
    }
    return {
        getCardOptions: this.getCardOptions,
        putCredits: this.putCredits,
        takeCredits: this.takeCredits,
        setTransactionLimit: this.setTransactionLimit,
        transferCredits: this.transferCredits
    }
}


