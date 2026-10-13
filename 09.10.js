const firstName = "аня";
const lastName = "иванова";
const age = 20;
const city = "Москва";
console.log(`
    ${firstName} ${lastName}, ${age}, г.${city}
`)
const inizial = `${firstName[0]}.${lastName[0]}`

console.log(inizial.toUpperCase())
console.log(`
    =====
    ${firstName} ${lastName}
    ${age} лет
    ${city}
    =====    
`)
if (age >= 18) {
    console.log(`совершеннолетний`)
} else {
    console.log(`несовершеннолетний`)
}
const text = "  JavaScript — это язык программирования. JavaScript классный! JavaScript JavaScript  ";
console.log(text.trim())
console.log(text.toLowerCase())
console.log(text.toLowerCase().split('javascript').length - 1);
const text1 = "JavaScript — это язык программирования"
function showText(str) {
    console.log(str)
}
let newText = text.trim().toLowerCase().replaceAll("javascript", "js")
console.log(newText.startsWith('js'));
showText(newText)
function reverse(str) {
    let temp = []
    for (let i = 0; i < str.length; ++i) {
        temp.push(str[str.length - 1 - i])
    }
    return temp.join("")
}
console.log(reverse(text1))
function palindrome(str) {
    let temp = []
    for (let i = 0; i < str.length; i++) {
        temp.push(str[str.length - 1 - i])
    }
    let str1 = temp.join("")
    return str === str1
}

function pal2(str) {
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            return false;
        }
        return true;
    }
}

function capitalize(str) {
    let temp = []
    for (let i = 0; i < str.length; i++) {
        temp.push(str[str.length])

    }
}
// console.log(capitalize(text1))

console.log(palindrome('казак'));
console.log(palindrome('шалаш'));
console.log(palindrome('привет'));

console.log(pal2('казак'));
console.log(pal2('шалаш'));
console.log(pal2('привет'));

//console.log(pal2(121));
//console.log(pal2(-121));

function countChar(str, ch) {
    str = str.toLowerCase().trim()
    let len = str.split(ch).length - 1

    return len;
}
function countChar2(str, ch) {
    str = str.toLowerCase().trim()
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ch) {
            count++
        }
    }
    return count;
}

console.log(countChar2(text1, 'a'));

function truncate(str, max) {
    if (str.length < max) {
        return str;
    }
    str = str.toLowerCase().trim()
    let str1 = "..."
    str = str.slice(0,max)
    return `${str} ${str1}`
}
console.log(truncate(text1, 10));

function phoneRegExp (str) {
    str = String(str)
    const reg = /^\+7 \(\d{3}\) \d{3}\-\d{2}\-\d{2}$/g
    if(!reg.test(str)){
        console.log("Неверно введен номер телефона");
    }
    return str
}

console.log(phoneRegExp("89774257773")); 