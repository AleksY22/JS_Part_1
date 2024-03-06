'use strict';

//==========================Циклы========================
//==================Треугольник==========================
/*
let resultOut = '';
const lenghtStr = 7;

for (let i = 1; i < lenghtStr; i++) {
   for (let j = 0; j < i; j++) {
      resultOut += '*';
   }
   resultOut += '\n';
}

console.log(resultOut);
*/

/*
//================Метки====================
first: for (let i = 0; i < 3; i++) {
   console.log(`First level: ${i}`);
   for (let j = 0; j < 3; j++) {
      console.log(`Second level: ${j}`);
      for (let k = 0; k < 5; k++) {
         if (k === 2) break first;
         console.log(`Third level: ${k}`);
      }
   }
}
*/

/*
//===============Задачи===================
let i = 5;
while (i < 11) {
   console.log(i);
   i++;
}

for (let j = 20; j >= 10; j--) {
   if (j === 13) break;
   console.log(j);
}

for (let k = 2; k <= 10; k += 2) {
   console.log(k);
}

let j = 2;
while (j <= 16) {
   if (j % 2 === 0) {
      j++;
      continue;
   } else {
      console.log(j);
   }
   j++;
}

const arrayOfNumbers = [];
let count = 0;

for (let i = 5; i <= 10; i++) {
   arrayOfNumbers[count] = i;
   count += 1;
}
console.log(arrayOfNumbers);
*/
/*
const arr = [3, 5, 8, 16, 20, 23, 50];
const result = [];

for (let i = 0; i < arr.length; i++) {
   result[i] = arr[i];
}
console.log(result);

const data = [5, 10, 'Shopping', 20, 'Homework'];

for (let i = 0; i < data.length; i++) {
   if (typeof (data[i]) === 'string') {
      data[i] = data[i] + ' - done';
   } else {
      data[i] = data[i] * 2;
   }
}
console.log(data);

const result = [];

for (let i = 1; i <= data.length; i++) {
   result[i - 1] = data[data.length - i];
}

console.log(result);
*/
/*
//v.1
let lines = 5;
let result = '';
let j = 1;
for (let i = 1; i < 7; i++) {
   let lineStr = '';
   lineStr = ' '.repeat(lines) + '*'.repeat(j) + '\n';
   lines -= 1;
   j += 2;
   result += lineStr;
}
console.log(result);
*/
/*
//v.2
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
   for (let j = 0; j < lines - i; j++) {
      result += ' ';
   }
   for (let j = 0; j < 2 * i + 1; j++) {
      result += '*';
   }
   result += '\n';
}

console.log(result);
*/
/*
function sayHello(name) {
   return `Привет, ${name}`;
}

function returnNeighboringNumbers(num) {
   return [num - 1, num, num + 1];
}

function getMathResult(base, rep) {
   if (rep <= 0 || typeof (rep) != 'number') {
      return base;
   } else {
      let str = '';
      for (let i = 1; i <= rep; i++) {
         if (i === rep) {
            str += `${base * i}`;
         } else {
            str += `${base * i}---`;
         }
      }
      return str;
   }
}
*/
/*
function calculateVolumeAndArea(lengthSide) {
   if (typeof (lengthSide) !== 'number' || !Number.isInteger(lengthSide) || lengthSide < 0) {
      return 'При вычислении произошла ошибка';
   }
   let v = 0;
   v = lengthSide * lengthSide * lengthSide;
   let s = 0;
   s = (lengthSide * lengthSide) * 6;
   return `Объем куба: ${v}, площадь всей поверхности: ${s}`;
}

console.log(calculateVolumeAndArea(-5));

function getCoupeNumber(numberPlace) {
   if (typeof (numberPlace) !== 'number' || !Number.isInteger(numberPlace) || numberPlace < 0) {
      return 'Ошибка. Проверьте правильность введенного номера места';

   }

   if (numberPlace === 0 || numberPlace > 36) {
      return 'Таких мест в вагоне не существует';
   }

   return Math.ceil(numberPlace / 4);
}

console.log(getCoupeNumber(7.7));
*/
/*
function sklonenie(number, txt) {
   const cases = [2, 0, 1, 1, 1, 2];
   return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
}
*/
/*
function getTimeFromMinutes(countMinutes) {
   if (typeof (countMinutes) !== 'number' || !Number.isInteger(countMinutes) || countMinutes < 0) {
      return 'Ошибка, проверьте данные';
   }
   const cases = [2, 0, 1, 1, 1, 2];
   const textOptionHour = ['час', 'часа', 'часов'];
   const textOptionMinute = ['минута', 'минуты', 'минут'];

   const textHour = Math.floor(countMinutes / 60);
   const textInsertHour = textOptionHour[(textHour % 100 > 4 && textHour % 100 < 20) ? 2 : cases[(textHour % 10 < 5) ? textHour % 10 : 5]];

   const textMinutes = countMinutes % 60;
   const textInsertMinute = textOptionMinute[(textMinutes % 100 > 4 && textMinutes % 100 < 20) ? 2 : cases[(textMinutes % 10 < 5) ? textMinutes % 10 : 5]];

   return `Это ${Math.floor(countMinutes / 60)} ${textInsertHour} и ${textMinutes} ${textInsertMinute}`;
}

function findMaxNumber(num1, num2, num3, num4) {
   if (typeof (num1, num2, num3, num4) !== 'number') {
      return 0;
   }
   return Math.max(num1, num2, num3, num4);
}

console.log(getTimeFromMinutes(150));

console.log(findMaxNumber(1, 8, 3, 5));
*/

/*
function fib(num) {
   if (typeof (num) !== 'number' || !Number.isInteger(num) || num <= 0) {
      return '';
   }
   let resultStr = '';
   let value1 = 0;
   let value2 = 1;
   for (let i = 0; i < num; i++) {
      resultStr += `${value1} `;
      let sumValue = value1 + value2;
      value1 = value2;
      value2 = sumValue;
   }
   return resultStr.slice(0, -1);
}

console.log(fib(7));
*/
/*
const personalPlanPeter = {
   name: 'Peter',
   age: '29',
   skills: {
      languages: ['ru', 'eng'],
      programmingLangs: {
         //js: '20%',
         //php: '10%'
      },
      exp: '1 month'
   },
   showAgeAndLangs: function (plan) {
      const { age, skills } = plan;
      return `Мне ${age} и я владею языками: ${skills.languages.join(' ').toUpperCase()}`;
   }
};

function showExperience(plan) {
   const { skills } = plan;
   return skills.exp;
}

function showProgrammingLangs(plan) {
   const { skills } = plan;
   let result = '';

   //if (Object.keys(skills.programmingLangs).length === 0) {
   //return '';
   //}

   for (let key in skills.programmingLangs) {
      result += `Язык ${key} изучен на ${skills.programmingLangs[key]}\n`;
   }
   return result;
}

console.log(showExperience(personalPlanPeter));
console.log(showProgrammingLangs(personalPlanPeter));
console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
*/
/*
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
   if (arr.length === 0) {
      return 'Семья пуста';
   }
   return `Семья состоит из: ${arr.join(' ')}`;
}

console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
   arr.forEach(item => {
      console.log(item.toLowerCase());
   });
}
standardizeStrings(favoriteCities);
*/
/*
const someString = 'This is some strange string';
function reverse(str) {
   if (typeof (str) !== 'string') {
      return 'Ошибка!';
   }
   let result = '';
   for (let i = str.length - 1; i >= 0; i--) {
      result += str[i];
   }
   return result;
}

function reverse(str) {
   if (typeof (str) !== 'string') {
      return 'Ошибка!';
   }
   const strToArr = str.split('');
   const arrToStr = strToArr.reverse();
   return arrToStr.join('');
}
console.log(reverse(someString));

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
   if (arr.length === 0) {
      return 'Нет доступных валют';
   }
   if (arr.includes(missingCurr)) {
      const indexItem = arr.indexOf(missingCurr);
      arr.splice(indexItem, 1);
   }
   let result = '';
   for (let i of arr) {
      result += i + '\n';
   }
   return 'Доступные валюты:' + '\n' + `${result}`;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY'));
*/
/*
//=========================================
const shoppingMallData = {
   shops: [
      {
         width: 10,
         length: 5
      },
      {
         width: 15,
         length: 7
      },
      {
         width: 20,
         length: 5
      },
      {
         width: 8,
         length: 10
      }
   ],
   height: 5,
   moneyPer1m3: 30,
   budget: 50000
};

function isBudgetEnough(data) {
   let squareShops = 0;
   data.shops.forEach(element => {
      squareShops += element.width * element.length;
   });
   const volumeShops = data.height * squareShops;
   const priceShops = volumeShops * data.moneyPer1m3;
   if (priceShops <= data.budget) {
      return 'Бюджета достаточно';
   } else {
      return 'Бюджета недостаточно';
   }
}

console.log(isBudgetEnough(shoppingMallData));
*/

//================================================
/*
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
function sortStudentsByGroups(arr) {
   const arrSorted = arr.sort();
   let arrResult = [];
   const count = Math.ceil(arr.length / 3);
   for (let i = 1; i <= count; i++) {
      let arrGroup = [];
      if (arrSorted.length >= 3) {
         arrGroup = arrSorted.splice(0, 3);
         arrResult.push(arrGroup);
         if (arrSorted.length === 0) {
            arrGroup = 'Оставшиеся студенты: -';
            arrResult.push(arrGroup);
         }
      } else if (arrSorted.length > 0 && arrSorted.length < 3) {
         const arrGroupStr = arrSorted.splice(0, arrSorted.length).join(', ');
         arrGroup = `Оставшиеся студенты: ${arrGroupStr}`;
         arrResult.push(arrGroup);
      }
   }
   return arrResult;
}
console.log(sortStudentsByGroups(students));
*/
/*
const restorantData = {
   menu: [
      {
         name: 'Salad Caesar',
         price: '14$'
      },
      {
         name: 'Pizza Diavola',
         price: '9$'
      },
      {
         name: 'Beefsteak',
         price: '17$'
      },
      {
         name: 'Napoleon',
         price: '7$'
      }
   ],
   waitors: [
      { name: 'Alice', age: 22 }, { name: 'John', age: 24 }
   ],
   averageLunchPrice: '20$',
   openNow: true
};

function isOpen(prop) {
   let answer = '';
   prop ? answer = 'Открыто' : answer = 'Закрыто';

   return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
   if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
      return 'Цена ниже средней';
   } else {
      return 'Цена выше средней';
   }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
   const copy = JSON.parse(JSON.stringify(data));

   copy.waitors[0] = { name: 'Mike', age: 32 };
   return copy;
}

console.log(transferWaitors(restorantData));
console.log(restorantData);
*/
/*
//============Оператор нулевого слияния (??)==========================
let valHeight = 300;
let valWidth = 400;

function changeParams(height, width) {
   const newHeight = `${height ?? 200}`; // если значение null или undefined, то используется второе значение
   const newWidth = `${width ?? 200}`; // // если значение null или undefined, то используется второе значение
   return [newHeight, newWidth];
}

console.log(changeParams(valHeight, valWidth));
console.log(changeParams());

//==============Оператор опциональной цепочки (?.)===================
//const box = document.querySelector('.box');
//console.log(box?.textContent); //проверяет значение слева от себя и останавливается если значение null или undefined (ошибки не будет)

const userData = {
   name: 'Ivan',
   age: null,
   say: function() {
      console.log('Hello');
   }
};

console.log(userData?.skills?.js); //undefined
userData.hey.?(); //undefined
*/

//==============Тип данных Symbol============================

let ip = Symbol('ip');

const obj = {
   name: 'test',
   id: 123,
   [Symbol('id')]: 1, //Скрытое свойство, при переборе не показывает
   [ip]: 192,
   getIp: function () {
      return this[ip];
   }
};

console.log(obj);
console.log(obj['id']);
console.log(obj[ip]);
console.log(obj.getIp());
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

