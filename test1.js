'use strict' //treat all code as new version
console.log('print')
const Id=1
let email="email.com"
var pass='123' 
// var is not prefered
// city="Isl"
//Id=2; not allowed
// console.log(id)
email="p@mail.com"
pass="456"
// city="Lah"
console.table([email,pass])
// alert(3+3) using node js not browser
console.log(typeof null)
let score="33"
console.log(typeof score)
let num = Number(score);
console.log(typeof num)
let nam="apple"
let bool= Boolean(nam)
console.log(bool)

let value=9
let negValue=-value
console.log(negValue)

let st1=3
let st2=8
let st3= st2+st1
console.log(st3)

console.log("1"+2+3)

// console.log(+true)

console.log(null>0)
console.log(null==0)
console.log(null>=0)

const id = Symbol('123')
const id2 = Symbol('123')
console.log(id === id2);

const fruit = ["apple", "mango", "banana"];

let meObj = {
    name: "M",
    course: "js",
}

console.log("Hello");
const myFun = function(){
}

let git='push'
let name= "M"
let course= "js"
console.log(`Hello my name is ${name} and my repo is about ${course}`);

const gameName = new String('flappy bird')
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('y'));

const newString1 = gameName.substring(0, 4)
console.log(newString1);
const anotherString1 = gameName.slice(-8, 4)
console.log(anotherString1);

const newString2 = "   Apple    "
console.log(newString2);
console.log(newString2.trim());

const count = new Number(100)
console.log(count.toFixed(1))
console.log(count.toPrecision(2))

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-PK'));

console.log(Math);
console.log(Math.abs(-1));
console.log(Math.round(4.1));
console.log(Math.floor(4.9));
console.log(Math.max(4, 9, 6, 3));
console.log(Math.floor(Math.random()*10) + 1);

let date = new Date()
console.log(date.toDateString());
console.log(date.toLocaleString());

let myCreatedDate = new Date("30-07-2024")
console.log(typeof myCreatedDate);


let myTimeStamp = Date.now()
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

newDate.toLocaleString('default', {
    weekday: "long"
})

const myArr = new Array(1,2,5,8,7)
console.log(myArr[1]);
myArr.push(7)
myArr.pop()
myArr.unshift(9)
myArr.shift()
console.log(myArr.includes(9));
console.log(myArr.indexOf(3));
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3)
console.log(myn1);

const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 8, [4, 5]]]
const real_array = another_array.flat(Infinity)
console.log(real_array);

console.log(Array.isArray("Apple"))
console.log(Array.from("Apple"))
console.log(Array.from({fruit: "Apple"})) 

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));