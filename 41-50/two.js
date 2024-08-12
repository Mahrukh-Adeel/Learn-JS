const namee= "memmmm      "
const course= "js      "
console.log(namee.trueLength)

let fruits = ["apple", "banana"]

let details={
    apple:"red",
    banana:"yellow",
    getPeel: function(){
        console.log(`Can be peeled: ${this.banana}`)
    }
}

Object.prototype.me = function() {
    console.log("js is being learnt");
}
details.me()
fruits.me()

Array.prototype.hey= function(){
    console.log("Js is here")
}
// details.hey()

const fruitSeller ={
    isSelling: true
}
const fruitPicker = {
    isBusy: false
}
Object.setPrototypeOf(fruitPicker, fruitSeller)

let user2 = "mee     "
String.prototype.trueLength= function(){
    console.log(`${this.trim().length} is true length`)
}
"mee".trueLength()
"me".trueLength()
