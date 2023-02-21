const degree =(x,n)=>{
    let result=1;
    for (let i=1;i<=n;i++){
        result*=x;
    };
    return(result);
};
usersNumber=+prompt('Введитее число ->');
usersDegree=+prompt('Введитее степень числа ->');
console.log(degree(usersNumber,usersDegree));