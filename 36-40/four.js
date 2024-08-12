const  pro1= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("asyc task");
        resolve()
    }, 1000)
});

pro1.then(function(){
    console.log("promice consumed")
})
new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("asyc 2");
        resolve()
    },1000)
}).then(function(){
    console.log("asynce 2 res")
})

const pro3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username: "me", mail: "me@mail"})
    },1000)
})
pro3.then(function(user){
    console.log(user)
})

const pro4 = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error= true;
        if (!error){
            resolve({username: "abs", pass: "123"})
        }
        else{
            reject("something went !")
        }
    },1000)
})
const username=pro4.then((user)=>{
    console.group(user);
    return user.username
}).then((username)=>{
    console.log(username)
}).catch(function(e){
    console.log(e);
}).finally(()=> console.log("maybe resolved or rejected"))

const pro5 = new Promise((resolve, reject)=>{
    setTimeout(function(){
        let error= true;
        if (!error){
            resolve({username: "abs", pass: "123"})
        }
        else{
            reject("something went !")
        }
    },1000)
});
async function consumePromiseFive(){
    try{
        const response = await pro5;
        console.log(response);
    }catch(e){
        console.log(e);
    }
}
consumePromiseFive()

async function users() {
   try{
        const res=  await fetch('https://jsonplaceholder.typicode.com/users')
        const data= await res.json()
        console.log(data);
    }catch(e){
        console.log(e)
    }
}
users()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))
