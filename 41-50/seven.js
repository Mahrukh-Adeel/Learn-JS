const des=Object.getOwnPropertyDescriptor(Math, 'Pi')
console.log(des);

const fruit = {
    name: 'Banana',
    price: 70,
    isAvailable: true,

    orderFruit: function(){
        console.log("Wait");
    }
}
console.log(Object.getOwnPropertyDescriptor(fruit, "name"));
Object.defineProperty(fruit, 'name', {
    //writable: false,
    // enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(fruit, "name"));
for (let [key, value] of Object.entries(fruit)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}