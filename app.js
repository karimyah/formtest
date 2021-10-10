const inputName = document.querySelector('#name');
const inputAge = document.querySelector('#age');
const inputForm = document.querySelector('form');
const greeting = document.querySelector('.greeting');
// inplement a class from Interface
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //function greet
    greet() {
        return `Hi, my name is ${this.name} and I am ${this.age}`;
    }
}
inputForm === null || inputForm === void 0 ? void 0 : inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
});
export {};
