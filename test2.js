const Mysym =Symbol("key1")
const VsUser ={
    name:"M",
    location: "isl",
    loggedIn: false,
    [Mysym]: "MyKey1",
    "PCode": 1234
}
console.log(VsUser.name)
console.log(VsUser["PCode"])
console.log(VsUser[Mysym])
VsUser.location="lah"
// Object.freeze(VsUser)
VsUser.location="isl"
console.log(VsUser.location)
VsUser.greeting = function(){
    console.log("Hello User!")
};
VsUser.greeting2 = function() {
    console.log(`Hello User, ${this.name}!`);
};
console.log(VsUser.greeting2())

// const instaUser = new Object()
const instaUser= {}
instaUser.id=123
instaUser.name="abc"
instaUser.loggedIn= false

const regUser={
    email:"1bc@mail.com",
    fName: {
        fname: "m",
        lname: "a"
    }
}
// console.log(regUser.fName.fname);
const ob1= {1:'a', 2:'b'}
const ob2= {3:'c', 4:'d'}
const obj3 = Object.assign({}, ob1,ob2)
console.log(obj3)

const users = [
    {
        id: 1,
        email: "abc@mail.com"
    },
    {
        id: 1,
        email: "abc@mail.com"
    },
    {
        id: 1,
        email: "abc@mail.com"
    },
]
console.log(users[1].email)

console.log(instaUser);
console.log(Object.keys(instaUser));
console.log(Object.values(instaUser));
console.log(Object.entries(instaUser));
console.log(instaUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "javascript",
    price: "80",
    courseInstructor: "hitesh"
}
const {courseInstructor: instructor} = course
console.log(instructor);

//USED json formatter

function add(num1, num2){
    console.log(num1 + num2)
}
add(1,null)    
function add(num1, num2){
    return(num1 + num2)
}
const result = add(1,null) 
console.log(result)   

function loginMessage(username = "m"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginMessage("a"))

function calculatePrice(...num1){
    return num1
}
console.log(calculatePrice(200, 400, 500))
function calculatePrice(val1, val2, ...num1){
    return num1
}
console.log(calculatePrice(200, 400, 500, 2000))

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject({
    username: "m",
    price: 99
})
const Array = [200, 400, 500, 2000]
function returnValue(getArray){
    return getArray[1]
}
console.log(returnValue(Array));
console.log(returnValue([200, 1002, 500, 2000]));

var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20  
    console.log(a);  
    console.log(c);
    console.log(b);
}
console.log(a);
console.log(c);

//scope is different in browser and different when using node.js

if (true) {
    const num = 1
    if (num === 1) {
        const numm = 2
        console.log(num + numm);
    }
    // console.log(numm);
}

// console.log(num);

const user = {
    username: "M",
    price: 99,
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);

//important fuction vs arrow function
const fruit =  () => {
    let name = "apple"
    console.log(this);
} 

const addTwo = (num1, num2) =>  num1 + num2

// Immediately Invoked Function Expressions (IIFE)
(function js(){
    console.log(`DB connected`);
})(); //global scope problem solved
( () => {
    console.log(`DB connected again`);
} )("M");