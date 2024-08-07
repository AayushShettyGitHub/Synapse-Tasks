function calculate(a,b){
    let result="",ans;
    for(let i=a;i<b;i++)
    {
        if(checkPrime(i)){
             ans=binary(i);
        }
        else{
             ans=divisor(i).toString();
             ans=`[${ans}]`;
        }
       result+=` ${i}: ${ans},`
    }
console.log(result)
}

function checkPrime(num){
   
        if (num <= 1) 
            return false; 
        for (let i = 2; i <=num/2; i++) {
            if (num % i === 0)
                { 
                    return false; 
                }
        }
        return true;
    }
   


function divisor(num){
    let divisors = [];
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisors.push(i);
        }
    }
    return divisors;
}
function binary(num){
    if (num === 0) return '0'; // Special case for zero
    
    let res = '';
    while (num > 0) {
        res = (num % 2) + res; 
        num = Math.floor(num / 2);  
    }
    
    return res;
}
calculate(2,15)