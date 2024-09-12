// problem 1
function calculateTax(income, expenses) {
    
    if(income <= 0 || expenses <= 0 || income < expenses){
        return 'Invalid Input';
    }

    const amount = income - expenses;
    const tax = amount * .20;
    
    return tax;            
}

// problem 2
function sendNotification(email) {

    if(email.includes('@') === false){
        return 'Invalid Email';
    }

    const userName = email.split('@')[0];
    return userName + ' sent you an email from gmail.com';    
       
}

// problem 3
function checkDigitsInName(name) {

    if(typeof name !== 'string'){
        return 'Invalid Input';
    }

    for(let num = 0; num < name.length; num++){
       if(!isNaN(name[num])){
        return true;
       }
    }
    return false;
}


// problem 4
function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return 'Invalid Input';
    }

    let family = 0;
    if(obj.isFFamily === true){
        family += 20;
    }
    const finalResult = obj.testScore + obj.schoolGrade + family;
    
    if(typeof obj.name ==='string' && obj.testScore <= 50 && obj.schoolGrade <= 30 && typeof obj.isFFamily === 'boolean'){
        if(finalResult >=80){
            return true;
        }
        
    }

    return false;
}

// problem 5
function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes) || typeof serialNumber !== 'number' || serialNumber < waitingTimes.length){
        return 'Invalid Input';
    }

    let totalTime = 0;
    for(const time of waitingTimes){
        totalTime += time;
    }
    
    const avgTime = Math.round(totalTime / waitingTimes.length);
    const waitingTime = serialNumber - 1 - waitingTimes.length;

    return waitingTime * avgTime;
}
