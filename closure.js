const stopWatch = function(){
    let count = 0;
    return function(){
        count++;
        return count
    }
}
const clcok1 = stopWatch();
console.log(clcok1())
console.log(clcok1())
console.log(clcok1())
const clcok2 = stopWatch();
console.log(clcok2())
console.log(clcok2())
console.log(clcok1())