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

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : true  }));

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFFamily : false }));

console.log(calculateFinalScore("hello" ));

console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true}));
