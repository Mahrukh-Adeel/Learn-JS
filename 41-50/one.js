const user={
    name:"me",
    loginCount: 7,
    signIn: true,

    getDetails:function(){
        console.log("Getting details from DB")
    }
}
console.log(user.name)
console.log(user.getDetails())

function users(username, loginCount,signIn){
    this.username = username
    this.loginCount = loginCount
    this.signIn = signIn
}
const user1 = new users("mee", 4, true)
const user2 = new users("you", 5, false)
console.log(user1)
console.log(user2.constructor)

function createUser(username, score){
    this.username = username
    this.score = score
}
createUser.prototype.increment = function(){
    this.score++
}
createUser.prototype.print = function(){
    console.log(`Score: ${this.score}`);
}
const you = new createUser("you", 33)
const me = createUser("me", 44)
you.print()