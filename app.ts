import PersonInterface from  './interfaceClass.js';
 
const inputName = document.querySelector('#name') as HTMLInputElement;
const inputAge = document.querySelector('#age') as HTMLInputElement;
const inputForm = document.querySelector('form')!;
const greeting = document.querySelector('.greeting') as HTMLDivElement



// inplement a class from Interface
 class Person implements PersonInterface {
    constructor( public name:string, public age: number ){}

    //function greet
    greet(){
        return `Hi, my name is ${this.name} and I am ${this.age}`;
    }
 } 

inputForm?.addEventListener('submit', (e) => {
    e.preventDefault();
 
    const person = new Person(inputName.value, inputAge.valueAsNumber);
    greeting.innerText = person.greet();
    inputForm.reset();
}

