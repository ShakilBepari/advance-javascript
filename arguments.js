function myFun(){
    const argumentsArray = [...arguments]
    let sum = 0;
    argumentsArray.map(x => {
        sum += x;
    })
    return sum;
}

console.log(myFun(20,20,20));