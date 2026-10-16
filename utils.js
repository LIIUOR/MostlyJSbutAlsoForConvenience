
function calculator(a, b, operation) {
    if(a===""||b==="")return
    let result
    switch (operation) {
        case '+':
            result=a+b
            break;
        case '-':
            result=a-b
            break;
        case '/':
            if(b===0){
                alert("Cannot divide by zero")
                return
            }
            result=a/b
            break;
        case '%':
            if(b===0){
                alert("Cannot divide by zero")
                return
            }
            result=a%b
            break;
        case '*':
            result=a*b
            break;
        default:
            return
    }
    console.log(result)
}
calculator(5,2,'*');
function concatStrings(a, b) {
    let result=a.concat(b)
    console.log(result)
}
concatStrings('hello','world');
function isArrayEmpty(arr) {
    return arr.length===0 ? true : false
}
let arr=[]
let arr1=[1,2]
console.log(isArrayEmpty(arr))
console.log(isArrayEmpty(arr1))