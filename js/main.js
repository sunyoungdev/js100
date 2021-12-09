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
