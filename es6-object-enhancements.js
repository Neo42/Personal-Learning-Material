let obj = function () {
    let name = "Jon";
    let age = 23;
    let gender = 'male';
    return {
        //property shorthand
        name,
        age,
        gender,
        //method shorthand
        sayName() {
            console.log(`Hello, my name is ${this.name}!!!`)
        }
    }
}
let Jon = new obj();
Jon.sayName();
//object destructuring
let {
    name,
    age
} = Jon;
console.log(name);//Jon
console.log(name === window.name);//false
console.log(name === Jon.name);//true
