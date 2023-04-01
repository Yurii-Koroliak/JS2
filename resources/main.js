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


let number=prompt('number');
result = (String(number%10)+String(Math.floor(number/10)));
alert(result);