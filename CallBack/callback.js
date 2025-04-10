function main(a,b, fn){
    const ans = fn(a,b);
    return ans
}

function sum(a,b){
    return a+b;
}
function sub(a,b){
    return a-b;
}

const result = main(5,6, sum);
console.log(result); // 11

const result2 = main(5,6, sub);
console.log(result2); // -1
