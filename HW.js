//-----------------------#1
console.log('-------------№1----------------');

for(let i = 1; i <= 10; i++){

    if( i % 3 == 0) {
        console.log('fizBuz');
    }else if( i % 2 == 0) {
        console.log('fiz');
    }else if( i % 2!== 0 ) {
        console.log('buz');
    }  
}

//---------------------#2



let inputNum = prompt('Введите число! И нажмите enter!');
let factorial = 1;

for (i = 1; i <= inputNum; i++){
factorial = factorial * i;
}

alert(inputNum + ' = ' + factorial);

//---------------------#3
console.log('-------------№3----------------');



//let weeksAmountPaperCount = consumptionPerWeek * weeksAmount;
//console.log(weeksAmountPaperCount + ` - листов за ${weeksAmount} недель` );
//let totalCount = weeksAmountPaperCount / sheetsInReamPaper;
//if (totalCount % 1 == 0)
//   console.log(parseInt(totalCount += 1) + `- пачек бумаги`);
//else  
//   console.log(parseInt(totalCount += 1) + `-пачек бумаги`);
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
amountOfPaper = (consumptionPerWeek * weeksAmount);
numberOfPacks = (amountOfPaper / sheetsInReamPaper);



console.log('Колличество пачек: ', numberOfPacks.toFixed(), );



//---------------------#4

console.log('-------------№4----------------');

const roomsOnFloor = 3;
const floors = 9;
const roomNumber = 265;

let porch;
let floor;

function searchHouse(roomsOnFloor, floors, roomNumber) {

    porch = roomNumber / (floors * roomsOnFloor);
    

    floor = (roomNumber % (floors * roomsOnFloor)) / roomsOnFloor +1;
    
        console.log('квартира ',roomNumber,'находится в:',porch.toFixed(),'подъезде , на',floor.toFixed(),'этаже');

}

searchHouse(roomsOnFloor, floors, roomNumber); 

console.log('-------------№5----------------');

//---------------------#5


let n1 = 6;

for (let i = 1; i <= n1; i++) {
    let str = '';
    for (j = 1; j <= 2 * n1 - 1; j++) {
        if (j >= n1 - (i - 1) && j <= n1 + (i - 1)) {
            str += '*';
        } else {
            str += '-';
        }

    }
    console.log(str);

}

let n2 = 8;
console.log('-------------#5----------------');

for (let i = 1; i <= n2; i++) {
    let str = '';
    for (j = 1; j <= 2 * n2 - 1; j++) {
        if (j >= n2 - (i - 1) && j <= n2 + (i - 1)) {
            str += '*';
        } else {
            str += '-';
        }

    }
    console.log(str);

}





