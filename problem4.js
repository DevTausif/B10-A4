function calculateFinalScore(obj) {
    if(typeof obj !== 'object'){
        return 'Invalid Input';
    }
    if(typeof obj.name ==='string' && obj.testScore <= 50 && obj.schoolGrade <= 30 && obj.isFamily === true){
        return true;
    }
    return false;
}

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFamily : true  }));

console.log(calculateFinalScore({ name: "Rajib", testScore: 45,  schoolGrade: 25, isFamily : false }));

console.log(calculateFinalScore("hello" ));

console.log(calculateFinalScore({ name: "Rajib", testScore: 15,  schoolGrade: 25, isFFamily : true}));
