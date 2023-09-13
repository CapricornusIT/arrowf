let users = [];
do {
    let user = prompt('Enter Command');
    var objUser = user.split(', ')
    objUser = objUser[0] == 'add' ? users.push(objUser[1]) : objUser
    objUser = objUser[0] == 'del' ? users.splice(0,2) : objUser
    console.log(users);
} while ( objUser[0] !== 'stop');
// let users = [];
// do {
//     let user = prompt('Enter Command');
//     var objUser = user.split(', ')
//     if (objUser[0] == 'add') {
//         users.push(objUser[1])
//     }else if (objUser[0] == 'del') {
//         users.splice(0,2)
//     }else{
//         ''
//     }
//     console.log(users);
// } while ( objUser[0] !== 'stop');


const num = [2, 6, 8, 9]
// function power(num){
//   return num ** 2;
// }
// const result = num.map(power)
// console.log(result);

const result = num.map(function (power) {
     return power ** 2
});
console.log(result);

const result2 = num.map((power) => {
     return power ** 2
});
console.log(result2);

// if one-line then you can do it without "return"

const result3 = num.map(power => power ** 2);
console.log(result3);








