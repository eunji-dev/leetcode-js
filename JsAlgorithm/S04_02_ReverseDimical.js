function isPrime(num){ // 소수인지 확인하는 로직
   if(num === 1){
    return false;
   }
   for(let i = 2; i <= parseInt(Math.sqrt(num)); i++){
    // Math.sqrt(num) // 제곱근
        if(num % i === 0){
            return false;
        }
   }
   return true;
}

function solution(arr){
    let answer = [];
    for(let x of arr){
        let res = 0;
        // reverse 로직
        while(x){
            let t = x % 10;
            res = res * 10 + t;
            x = parseInt(x/10);
        }
        if(isPrime(res)){
            answer.push(res);
        }
    }

    
    return answer;
}

function solution2(arr){
    let answer = [];
    for(let x of arr){
        let res = Number(x.toString().split('').reverse().join(''));
        if(isPrime(res)){
            answer.push(res);
        }
    }
    return answer;
}

let arr=[32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));