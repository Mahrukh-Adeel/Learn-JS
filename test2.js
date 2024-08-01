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
