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

console.log(checkDigitsInName('Raj123'));
console.log(checkDigitsInName('Suman'));
console.log(checkDigitsInName('Name2024'));
console.log(checkDigitsInName('!@#'));
console.log(checkDigitsInName(["Raj"]));
