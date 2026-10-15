//1 задание
let shoppingList=["Молоко","Хлеб","Сыр","Рыба"]
//2 задание
shoppingList.push("Масло")
shoppingList.unshift("Сахар")
console.log(shoppingList);
//3 задание
function deleteItem(mas,word){
    let index=mas.indexOf(word);
    if(index!=-1){
        mas.splice(index,1)
        console.log(`${word} удалено`);
    }else{
        console.log(`${word} не найдено`);
    }
}
console.log(deleteItem(shoppingList,'Рыба'));
function swapItem(mas,word1,word2){
    let index=mas.indexOf(word1)
    mas.splice(index,1,word2)
    return mas
}
console.log(swapItem(shoppingList,'Сыр','Курица'));
//4 задание
let vegetables=["Морковь","Лук","Картофель"]
//5 задание
let combined=shoppingList.concat(vegetables)
console.log(combined);
//6 задание
function findWord(mas,word){
    return mas.includes(word) ? `${word} в списке: ${true}` : `${word} в списке: ${false}`
}
console.log(findWord(combined,'Яблоки'));
//7 задание
combined.sort()
//8 задание
shoppingList.forEach((item,index)=>{
    console.log(`${index}:${item}`);
})
//9 задание
function addItem(item,mas) {
    let formatName=item[0].toUpperCase()+item.slice(1).toLowerCase()
    mas.push(item)
    mas.sort()
}
addItem("Лобок шишова",combined)
//11 задание
function displayShoppingList(mas){
    let str=mas.join("; ")
    console.log(str)
}
displayShoppingList(combined)