let test = "test";

console.log(test);

const heading = document.createElement('h1');
heading.textContent = 'Działa!';

const app = document.querySelector('#root');
app.append(heading);

class Dog {
  name = 'Szogi';
  age = 11;
}
const myDog = new Dog();

console.dir(myDog);

