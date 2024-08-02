for (let index = 0; index < 10; index++) {
    const element = index;
    console.log(index)
    if(index==2){
        console.log("2 is here")
    }
}
for (let i = 1; i <= 10; i++) {
    console.log(`Outer value: ${i}`);
   for (let j = 1; j <= 10; j++) {
    console.log(`Inner value ${j} and inner loop ${i}`);
    console.log(i + '*' + j + ' = ' + i*j );
   }
}
array= ['apple', 'mango', 'banana']
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    console.log(element)
}
i=0;
while (i<15) {
    console.log(`index is ${i}`)
    i= i+5
}
i=0
while(i<array.length){
    console.log(array[i])
    i++
}
let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);
const object = [1,2,3,4]
for (const iterator of object) {
    console.log(iterator)
}
const words='world'
for(const word of words){
    console.log(word)
}

const map = new Map()
map.set("fruit", 'apple')
map.set("vegetable","potato")
console.log(map)
for (const [key, value] of map) {
    console.log(key, ':-', value);
}

const obj = {
    fruit1: 'apple',
    fruit2: 'mango'
}
//can not be done by same for loop(of())
for (const num in obj) {
    console.log(`${num} id for ${obj[num]}`);
}

const lang = ["js", "py", "java"]

for (const key in lang) {
    console.log(lang[key]);
}

lang.forEach()