function sendNotification(email) {

    if(email.includes('@') === false){
        return 'Invalid Email';
    }

    const userName = email.split('@')[0];
    return userName + ' sent you an email from gmail.com';    
       
}
 console.log(sendNotification('zihad@gmail.com'));
 console.log(sendNotification('farhan34@yahoo.com'));
 console.log(sendNotification('nadim.naem5@outlook.com'));
 console.log(sendNotification('fahim234.hotmail.com'));
 console.log(sendNotification('sadia8icloud.com'));