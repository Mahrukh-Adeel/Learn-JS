class user {
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}pass`
    }
    set password(value){
        this._password = value
    }
}
const me = new user("mail.com", "abc")
console.log(me.password)
console.log(me.email);

//Old
function users(email, password){
    this._email = email;
    this._password = password
    Object.defineProperty(this, 'email', {
        get: function(){
            return this._email.toUpperCase()
        },
        set: function(value){
            this._email = value
        }
    })
    Object.defineProperty(this, 'password', {
        get: function(){
            return this._password.toUpperCase()
        },
        set: function(value){
            this._password = value
        }
    })
}
const star = new users("mail.com", "455")
console.log(star.email)

//Object get set
const User ={
    _email: "mail.com",
    _password:"12",
    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}
const flower = Object.create(User)
console.log(flower.email)
