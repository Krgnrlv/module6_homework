let numb = +prompt('Введите число от 0 до 1000 -->');
let k=0;
if (typeof numb =='number' && numb<1000 && numb>0){
    for (let i=2; i<=numb/2;i++){
        if (numb%i==0){
            k+=1
        }
    };
    switch(k){
        case 0:
            alert('Число простое!');
            break;
        default:
            alert('Число составное');
    };
}else if(numb==0 || numb==1){
    alert('Это число не считается ни простым, ни сложным')
}else{
    alert('Данные неверны'); 
};