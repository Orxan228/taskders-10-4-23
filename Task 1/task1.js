// Task 1

// var num = prompt("Ededi daxil edin:");
// var result = 0
// function reverse() {
//     while (num>0) {
//         digit= num%10;
//         result = result*10+digit;
//         num = Math.floor(num/10);
//     }
//     return result;
// }
// console.log(reverse());

// Task 2
// const list =  ["Uzunsoz1", "Dahauzunsoz", "Enuzunsoz123321", "Qisasoz"]
// let uzunsoz = "";
// function uzun(){
//     for (let i = 0; i < list.length; i++) {
//         if (list[i].length>uzunsoz.length) {
//             uzunsoz = list[i]
//         }
//     } 
//     return uzunsoz;
// }
// console.log(uzun());

// Task 3

var num = prompt("Ededi daxil edin:");
var sum = 0
var max = 0
var min = 0
var result = 0
function reverse() {
    while (num>0) {
        digit= num%10;
        result = result*10+digit;
        num = Math.floor(num/10);
    }
    return result;
}
console.log(reverse());
