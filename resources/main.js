// let itemPlus1 = 0.1;
// let itemPlus2 = 0.2;
// alert(itemPlus1 + itemPlus2);

// itemPlus1 = '1';
// itemPlus2 = 2;
// alert(Number(itemPlus1) + itemPlus2);

// const sizeFile = 0.820;
// let sizeFlashDriver=prompt('What is the capacity of your flash drive in GB?');
// let result = Number(sizeFlashDriver)/sizeFile;
// alert(result);

// let money=prompt('How much money do you have?');
// let cost=prompt('How much cost one chocolate?');
// alert(`${money/cost} chocolate you can buy`);
// alert(`and you have surrender ${money%cost}$`);


// let number=prompt('two or three-digit numbers ');

// if (number<100) {
//     result = (String(number%10)+String(Math.floor(number/10)));
// } else if (number>=100) {
//     result = (String(number%10)+(String((Math.floor(number/10))%10)+String(Math.floor((Math.floor(number/10))/10))));
// }

// alert(result); 


//------------------------------part 2------------------------------



// Олег вклав 15000$ під 7% річних, вивести в консоль чи зможе він купити дім за 20000$ через 2 роки, і залишок якщо є.


// let invested = 15000;
// const annualInterest = 7;
// const costHouse = 20000;
// let annualProfit = ((invested * annualInterest) / 100);
// if ((annualProfit * 2 + invested) > costHouse) {
//     console.log(`Oleg can buy house, and he has ${(annualProfit * 2 + invested) - costHouse} surrender`);
// } else {
//     console.log('Oleg can not buy house');
// }





// Методом promt отримати відповідь від користувача “Скільки буде 10 + або - 20”.
// Якщо відповідь вірна вивести в консоль Успіх якщо ні Лузер.
// Якщо користувач введе Я не лузер вивести теж Успіх.


// const firstNumber = 10;
// const secondNumber = 20;
// let action;
// let answer;
// let attempt;
// attempt = 'yes';

// while (attempt == 'yes') {
//     action = prompt('what action do you want to perform?');
//     if (action == '+') {
//         answer = prompt(`how much is ${firstNumber} + ${secondNumber}`);
//         if (answer == 30) {
//             alert('good');
//             attempt = prompt('do you want try again?');
//         } else {
//             alert('looser');
//             attempt = prompt('do you want try again?');
//         }
//     } else if (action == '-') {
//         answer = prompt(`how much is ${firstNumber} - ${secondNumber}`);
//         if (answer == -10) {
//             alert('good');
//             attempt = prompt('do you want try again?');
//         } else {
//             alert('looser');
//             attempt = prompt('do you want try again?');
//         }
//     } else {
//         alert('you must write "+" or "-"');
//         attempt = prompt('do you want try again?');
//     }
// }






// В нас є сервер розміром 1024мб (memoryStore).
// Є 3 ролі користувача ceo/admin/user (role).
// CEO - може розміщувати до 100мб файл.
// Admin - може розміщувати до 50мб файл.
// User - може розміщувати до 10мб файл.
// За допомогою методу promt дізнатися роль користувача і яким розміром файл він хоче розмістити, якщо розмір більший то вивести помилку.
// *** Зробити повторні запити і вираховувати кількість вільної памʼяті, якщо памʼяті не вистачає зупинити опитування

// const server = 1024;
// const role = ['seo', 'admin', 'user'];
// const seoPossibilities = 100;
// const adminPossibilities = 50;
// const userPossibilities = 10;
// let userRole = prompt(`which role you have: ${role[0]}, ${role[1]} or ${role[2]}?`);
// let capacity;
// let newTry;
// newTry = 'yes';
// let newFile;
// let newDesire;

// switch (userRole) {
//     case 'seo':
//         alert(`you are ${role[0]}`);
//         while (newTry == 'yes') {
//             capacity = prompt(`What size file do you want upload to the server? (server has size - ${server}MB. But you can upload only ${seoPossibilities}MB)`);
//             if (capacity > seoPossibilities) {
//                 alert(`error`);
//                 newTry = prompt(`Do you want upload another file?`);
//             } else {
//                 alert(`your file width ${capacity}MB has been uploaded to the server`);
//             }
//             newDesire = prompt(`Do you want to upload new file?`);
//             let serverSize = server - capacity;
//             if (newDesire == 'yes') {
//                 while (newTry == 'yes') {
//                     capacity = prompt(`what size of your file? (Server have only ${serverSize} more) But you can upload only ${seoPossibilities}MB)`);
//                     if (capacity > seoPossibilities) {
//                         alert(`error`);
//                         newTry = prompt(`Do you want upload another file?`);
//                     } else {
//                         alert(`your file width ${capacity}MB has been uploaded to the server`);
//                         alert(`server has ${serverSize - capacity}MB more`);
//                         break;
//                     }
//                 }
//                 break;
//             }
//         }
//         break;
//     case 'admin':
//         alert(`you are ${role[1]}`);
//         while (newTry == 'yes') {
//             capacity = prompt(`What size file do you want upload to the server? (server has size - ${server}MB. But you can upload only ${adminPossibilities}MB)`);
//             if (capacity > adminPossibilities) {
//                 alert(`error`);
//                 newTry = prompt(`Do you want upload another file?`);
//             } else {
//                 alert(`your file width ${capacity}MB has been uploaded to the server`);
//             }
            
//             newDesire = prompt(`Do you want to upload new file?`);
//             let serverSize = server - capacity;
//             if (newDesire == 'yes') {
//                 while (newTry == 'yes') {
//                     capacity = prompt(`what size of your file? (Server have only ${serverSize} more) But you can upload only ${adminPossibilities}MB)`);
//                     if (capacity > adminPossibilities) {
//                         alert(`error`);
//                         newTry = prompt(`Do you want upload another file?`);
//                     } else {
//                         alert(`your file width ${capacity}MB has been uploaded to the server`);
//                         alert(`server has ${serverSize - capacity}MB more`);
//                         break;
//                     }
//                 }
//                 break;
//             }
//         }
//         break;
//     case 'user':
//         alert(`you are ${role[2]}`);
//         while (newTry == 'yes') {
//             capacity = prompt(`What size file do you want upload to the server? (server has size - ${server}MB. But you can upload only ${userPossibilities}MB)`);
//             if (capacity > userPossibilities) {
//                 alert(`error`);
//                 newTry = prompt(`Do you want upload another file?`);
//             } else {
//                 alert(`your file width ${capacity}MB has been uploaded to the server`);
//             }
//             newDesire = prompt(`Do you want to upload new file?`);
//             let serverSize = server - capacity;
//             if (newDesire == 'yes') {
//                 while (newTry == 'yes') {
//                     capacity = prompt(`what size of your file? (Server have only ${serverSize} more) But you can upload only ${userPossibilities}MB)`);
//                     if (capacity > userPossibilities) {
//                         alert(`error`);
//                         newTry = prompt(`Do you want upload another file?`);
//                     } else {
//                         alert(`your file width ${capacity}MB has been uploaded to the server`);
//                         alert(`server has ${serverSize - capacity}MB more`);
//                         break;
//                     }
//                 }
//                 break;
//             }
//         }
//         break;
//     default:
//         alert(`sorry, but we have not you role :(:(:(`);
// }
