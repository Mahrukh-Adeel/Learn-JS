class user {
    constructor(username){
        this.username = username
    }
    log(){
        console.log(`user is ${this.username}`);
    }
    static create(){
        return '355'
    }
}
class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
    add(){
        console.log(`new added ${this.username}`)
    }
}
const me = new teacher("me", "mail.com", "2334")
me.add()
const you = new user("you")
you.log()
console.log(you instanceof user)
console.log(you.create())
class teach extends user{
    constructor(username, email){
        super(username)
        this.email= email
    }
}
const me1 = new teach("me", "me@mail")
console.log(me1.create())