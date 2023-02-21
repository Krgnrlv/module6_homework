function countdown (firstNumber,lastNumber){
    let timerId=setInterval(function(){
        console.log(firstNumber);
        if (firstNumber==lastNumber){
            clearInterval(timerId)
        }
        firstNumber+=1;
    },1000)
};
firstUsersNumber=+prompt('Введитее начальное число ->');
lastUsersNumber=+prompt('Введитее конечное число ->');
countdown(firstUsersNumber,lastUsersNumber)
