// q1
const nums = [100, 200, 300, 400, 500];
// nums.splice(3);
nums.pop();
nums.pop();
console.log(nums);

// q2
const arr = [200, 100, 300];
arr.splice(2, 0, 10000);
console.log(arr);

// q3
// object
var arr1 = [100, 200, 300];
console.log(typeof(arr1));

// q4
// const a = 2.22;
// console.log(typeof(a));

// q5
var a = 10;
var b = 2;

for(var i=1; i<5; i+=2){
    a += i;
}

console.log(a+b);

// q6
var x = 1;
if (x) {
    console.log('true');
}

// q7
// let/1age

// q8
var d = {
    'height':180,
    'weight':78,
    'weight':84,
    'temperature':36,
    'eyesight':1
};

console.log(d['weight']);   // 84

// q9
var year = '2019';
var month = '04';
var day = '26';
var hour = '11';
var minute = '34';
var second = '27';

var result = year.concat('/', month, '/', day, ' ', hour, ':', minute, ':', second);

console.log(result);

// q10
// const num = prompt('숫자를 입력하세요');
const num = 5;
let tree = '';
for (let i = 1; i <= num; i++) {
    let star = '';
    for (let j = 1; j <= num - i ; j++) {
        star += 'o';
    }
    for (let k = 0; k < 2*i - 1; k++) {
        star += '*';
    }
    tree += star + '\n';
}
console.log(tree);
//ooo*
//oo***
//o*****

// q11
let s = 0;
let num2 = 100;
for (let i = 1; i <= num2; i++) {
    s += i;
}
console.log(s);

// q12
class Wizard{
    constructor(health, mena, armor) {
        this.health = health;
        this.mana = mena;
        this.armor = armor;
    }

    attack() {
        console.log('fire ball!');
    }
}
const x2 = new Wizard(545, 210, 10);
console.log(x2.health, x2.mana, x2.armor);
x2.attack();

// q13
function findStar(i) {
    const stars = ['수성', '금성', '지구', '화성', '목성', '토성', '천왕성', '해왕성'];
    console.log(stars[i - 1]);
}
findStar(2);


// q14
function isDividedByThree(num) {
    if (num % 3 === 0) {
        console.log('짝');
    } else{
        console.log(num)
    }
}
isDividedByThree(3)

// q15
function sayHi(name) {
    console.log(`Hi, I'm ${name}.`);
}
sayHi('Sun');

// q16
function onReverse(text) {
    const reversed = text;
    /*
    * split() 메서드는 문자열을 배열로 만들어 반환하고,
    * reverse() 메서드는 배열의 순서를 반전하며,
    * join() 메서드는 원소를 모두 붙여 문자열로 반환합니다.
    */
    console.log(reversed.split('').reverse().join(''));
}
onReverse('iloveyou')

// q17
function heightCheck(height) {
    if (height > 150) {
        console.log('yes');
    } else {
        console.log('no');
    }
}
heightCheck(140)

// q18
function getAverageScore(num) {
    const scores = num.split(' ');
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += parseInt(scores[i]);
    }
    console.log(Math.floor(sum / scores.length));
}
getAverageScore('20 30 40');

// q19 
function getSquare(num) {
    const numArray = num.split(' ');
    console.log(Math.pow(numArray[0], numArray[1]));
}
getSquare('7 2');

// console.log(Math.pow('7', '2'));

// q20
function getRemainder(num) {
    const nums = num.split(' ');
    const remainder = parseInt(nums[0]) / parseInt(nums[1]);
    const left = parseInt(nums[0]) % parseInt(nums[1]);
    console.log(`${remainder} ${left}`);
}
getRemainder('10 2');

// q21
const x3 = new Set('javascript');
const x4 = new Set();

// q23
console.log(10/3);

// q24
function getUpperCase(name) {
    console.log(name.toUpperCase());
}
getUpperCase('mary');

// q25
function getCircleSize(radius) {
    console.log(radius * radius * 3.14);
}
getCircleSize(3);

// q26 
function getEngName(name) {
    const planets = {
        '수성': 'Mercury',
        '금성': 'Venus',
        '지구': 'Earth',
        '화성': 'Mars',
        '목성': 'Jupiter',
        '토성': 'Saturn',
        '천왕성': 'Uranus',
        '해왕성': 'Neptune',
    }
    console.log(planets[name]);
}
getEngName('화성');

// q27
// const keys = prompt('이름?').split(' ');
// const values = prompt('점수?').split(' ');

// const obj = {};
// for (let i = 0; i < keys.length; i++) {
//     obj[keys[i]] = parseInt(values[i]);
// }
// console.log(obj);

// q28
function make2gram(str) {
    for (let i = 0; i < str.length - 1; i++) {
        console.log(`${str[i]} ${str[i + 1]}`);
    }
}
make2gram('javascript');

// q29
function checkUpperCase(str) {
    if (str === str.toUpperCase()) {
        console.log('pass');
    } else {
        console.log('stop');
    }
}
checkUpperCase('ABC');

// q30
function findWord(sentence, word) {
    console.log(sentence.indexOf(word));
}
findWord('pineapple is yummy', 'apple');
/* indexOf() 메서드는 호출한 스트링 객체나 배열에서 
 * 주어진 값과 일치하는 값 혹은 요소의 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환합니다.
*/

// q31
// 배열 검색시 해당 인덱스를 안다면 O(1)의 시간복잡도를 갖는다. 해당인덱스를 찾아간다면 O(n) 의 시간복잡도를 갖음
// push() 메서드는 배열의 끝에 하나 이상의 요소를 추가하고, 배열의 새로운 길이를 반환
// pop() 메서드는 배열에서 마지막 요소를 제거하고 그 요소를 반환
// includes() 메서드는 배열이 특정 요소를 포함하고 있는지 판별
// 시간 복잡도가 O(1)이 아닌것 => arr.slice() / arr.includes(5)

// q32
function getWordsNumber(sentence) {
    const words = sentence.trim().split(' ');
    console.log(words, words.length);

}
getWordsNumber('안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다. qks 반갑! 야호! ')

// q33
// function reverseOutput(num) {
//     const nums = num.trim().split(' ');
//     console.log(nums.reverse().join(' '));
// }
// reverseOutput('1 2 3 4 5');
function reverseOutput(num) {
    const nums = num.trim().split(' ').reverse();
    let result = '';
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];   
    }
    console.log(result);
}
reverseOutput('1 2 3');

// q34
function checkHeight(height) {
    const heights = height;
    let orderedHeights = '';

    orderedHeights = heights.trim().split(' ').sort((a, b) => a - b).join(' ');
    console.log(heights,orderedHeights);
    if (heights === orderedHeights) {
        console.log('True');
    } else {
        console.log('False');
    }
}
checkHeight('155 160 158 140 165');

// q35
function one(n){
    function two(base){
        return Math.pow(base, n);
        // return console.log(base, n);
    }
    return two;
}

const ax = one(2);
const bx = one(3);
const cx = one(4);

console.log(ax(10));
console.log(bx(10));
console.log(cx(10));

// q36
function getTimes(n) {
    let times = '';
    for (let i = 1; i <= 9; i++) {
        times += `${n * i} `;
    }
    console.log(times);
}
getTimes(3);

// q37
// Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환
function findPresident(data) {
    const datas = data.trim().split(' ');
    let result = {};
    let winner = '';

    for (let i in datas) {
        let key = datas[i];
        let value = result[key] === undefined ? 1 : result[key] + 1;
        result[key] = value;
    }

    winner = Object.keys(result).reduce((a, b) => result[a] > result[b] ? a : b);

    console.log(result);    // {원범: 2, 혜원: 4, 유진: 2}
    console.log(winner);    // 혜원
    console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
}
findPresident('원범 원범 혜원 혜원 혜원 혜원 유진 유진 유진 유진 유진');

// q38
function findTop3(score) {
    const scores = score.trim().split(' ').map((score) => parseInt(score, 10));
    scores.sort((a, b) => a - b);
    console.log(scores);    // [55, 66, 75, 85, 86, 95, 97, 97, 97, 97]

    let count = 0;
    let arr = [];
    while (arr.length < 3) {
        let n = scores.pop();
        if (!arr.includes(n)) {
            arr.push(n);
        }
        count += 1;
    }
    console.log(count);
}
findTop3('97 86 75 66 55 97 85 97 97 95');

// q39
// function replaceTypo(str, searchStr, replaceStr) {
//     console.log(str.split(searchStr).join(replaceStr));
// }
// replaceTypo('hqllo my namq is hyqwon', 'q', 'e');

// replace(regexp|substr, newSubstr|function) => 어떤 패턴에 일치하는 일부 또는 모든 부분이 교체된 새로운 문자열을 반환
// 모든 문자열에 대해 검색하고 바꾸려면 정규표현식의 g플래그를 포함하세요.

function replaceTypoWithReg(str) {
    const reg = /q/gi;
    console.log(str.replace(reg, 'e'));
}
replaceTypoWithReg('hqllo my namq is hyqwon');

// q40
function weightCheck() {
    const limit = prompt('제한 무게?');
    const num = prompt('총 몇 명?');
    let total = 0;
    let count = 0;
    for (let i = 1; i <= num; i++) {
        total += parseInt(prompt('몸무게?'), 10);
        if (total <= limit) {
            count = i;
        }
    }
    console.log(count);
};
// weightCheck();

// q41
function isPrime(num) {
    if (num === 2) {
        return console.log(true);
    } else if (num <= 1) {
        return console.log(false);
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return console.log(false);
        }
    }
    return console.log(true);
}
isPrime(3);

// q42
function getDay(year, month, date) {
    const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
    const dateInfo = new Date(year, month - 1, date);   // 월은 0부터 시작
    const x = dateInfo.getDay();    // 0부터 시작
    console.log(day[x]);
}
getDay(2020, 5, 24);

// q43
// 십진수에서 다른 진수로 변환 시킬때는 toString을 사용 + 문자=>숫자열은 parsInt
// 다른 진수에서 십진수로 변환시킬때는 parseInt를 사용
// parseInt("10101101000", 2) // 1384

function get2Radix(num) {
    console.log(parseInt(num.toString(2)));
}
get2Radix(555);

// q44
function getTotal(num) {
    const nums = num.trim().split('').map((n) => parseInt(n, 10));
    const total = nums.reduce((prev, curr) => prev + curr);
    console.log(total);
}
getTotal('18234');  // 18

// q45
// 1000 * 60 * 60 * 24 * 365은 1년, getTime으로 나온 값을 1년으로 나누면 1970년도 이후부터 흐른 연도가 나온다.
// 거기에 1970을 더해주면 이번년도
function getCurrYear() {
    const date = new Date();
    const time = date.getTime();
    const year = Math.floor(time / (1000 * 60 * 60 * 24 * 365)) + 1970;
    console.log(year);
}
getCurrYear();

// q46
function getTotal2(startNum, endNum) {
    let nums = [];
    for (let i = startNum; i <= endNum; i++) {
        nums.push(i);
    }
    nums = nums.join('').split('').map((n) => parseInt(n, 10));
    const total = nums.reduce((prev, curr) => prev + curr);
    console.log(total);
}
getTotal2(1, 20);

// q47
// Set 객체는 자료형에 관계 없이 원시 값과 객체 참조 모두 유일한 값을 저장할 수 있다. 
// Object.keys() 메소드는 주어진 객체의 속성 이름들을 일반적인 반복문과 동일한 순서로 순회되는 열거할 수 있는 배열로 반환
const people = {
    이호준: "01050442903",
    이호상: "01051442904",
    이준호: "01050342904",
    이호준: "01050442903",
    이준: "01050412904",
    이호: "01050443904",
    이호준: "01050442903"
  };
function checkDup(obj) {
    const result = new Set();
    for (let key in obj) {
        result.add(obj[key]);
    }
    console.log(result.size);
}
checkDup(people);

// const set = new Set(Object.keys(people));
// console.log(set.size)

// Set()
const set1 = new Set();
set1.add({ x: 10, y: 20 }).add({ x: 20, y: 30 });
console.log(set1);
// Delete any point with `x > 10`.
set1.forEach((point) => {
  if (point.x > 10) {
    set1.delete(point);
  }
});

console.log(set1.size);
// expected output: 1

// q48
function changeCases(str) {
    const UPPERCASE = 'ABCDEFGHIGKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < str.length; i++) {
        let alph;
        if (UPPERCASE.includes(str[i])) {
            alph = str[i].toLowerCase();
        } else {
            alph = str[i].toUpperCase();
        }
        result += alph;
    }
    console.log(result);
}
changeCases('AAABBBcccddd');

function changeCases2(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            result.push(str[i].toUpperCase());
        } else {
            result.push(str[i].toLowerCase());
        }
    }
    console.log(result.join(''));
}
changeCases2('AAABBBcccddd');

// q49
function getMaxNum(str) {
    const nums = str.trim().split(' ');
    nums.sort((a, b) => a - b);
    const max = nums.pop();
    console.log(max);
}
getMaxNum('10 9 8 7 6 5 4 3 2 1');

// q50
function bubble(str) {
    let result = str.split(' ').map((n) => {
        return parseInt(n, 10);
      }); 
  
    for (let i = 0; i < result.length - 1; i++) { // 순차적으로 비교하기 위한 반복문
      for (let j = 0; j < result.length - 1 - i; j++) { // 끝까지 돌았을 때 다시 처음부터 비교하기 위한 반복문
        if (result[j] > result[j + 1]) { // 두 수를 비교하여 앞 수가 뒷 수보다 크면
           let temp = result[j];         // 두 수를 서로 바꿔준다
           result[j] = result[j + 1];
           result[j + 1] = temp;
        }
      }
    }
    return console.log(result);
  }  
bubble('1 2 4 1 5 2 6');