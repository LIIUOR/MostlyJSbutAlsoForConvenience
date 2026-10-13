const name="lior"
let age =18
let student=true
console.log("Меня зовут "+name+", мне "+age+"лет. Студент "+student)
let num=10;
let str="str";
let bool=true;
let a=null;
let b
let user={
    name:'lior',
    age: 18,
    student: true
}
let number=[1,2,3,4,5];
console.log(typeof num+typeof str+typeof bool+typeof a+typeof b+typeof user+typeof number)
const a1=10
const b1=3
console.log(`
    Сумма ${a1+b1},    
    Разность ${a1-b1},
    Произведение ${a1*b1}
    Частное ${a1/b1}
    Остаток от деления ${a1%b1}
    a в степени b ${a1**b1}
`)
if (age>25){
    console.log("старый")
}else if(age>10 && age<25){
    console.log("студентик")
}else{
    console.log("лепрекон")
}
for(let i=0;i<10;++i){
    console.log(i)
    if(i%2==0){
        console.log(i)
    }
}
for(let i=0;i<100;++i){
    console.log(i)
}
function greet(name){
    return `Привет, ${name}!`;
}
console.log()