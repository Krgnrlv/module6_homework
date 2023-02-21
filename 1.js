function countZeroOddEven(A){
    let k0=0;
    let k2=0;
    let k3=0;
    for (let i=0;i<=A.length;i++){
        if (typeof A[i]==='number' && !isNaN(A[i])){
            if (A[i]==0){
                k0+=1;
            } else if (A[i]%2==0){
                k2+=1;
            }else{
                k3+=1;
            }
        }
    };
    console.log('Количество 0 -->',k0);
    console.log('Количество чётных чисел -->',k2);
    console.log('Количество нечётных чисел -->',k3);
};
B=[12,4,5,7,null,undefined,NaN,3,5,6,7,'a','hi',0 ,0];
countZeroOddEven(B);