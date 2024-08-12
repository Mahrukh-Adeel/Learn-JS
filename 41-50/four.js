class user {
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encrypyPass(){
        return `${this.password}bbs`
    }
    changeName(){
        return `${this.username.toUpperCase()}`
    }
}
const me = new user("me", "mail.om", "123")
console.log(me.encrypyPass());
console.log(me.changeName());

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}
User.prototype.encryptPass= function(){
    return `${this.password}bbs`
}
User.prototype.changeName= function(){
    return `${this.username.toUpperCase()}`
}
const you = new user("you", "mail.om", "455")
console.log(you.encrypyPass());
console.log(you.changeName());
