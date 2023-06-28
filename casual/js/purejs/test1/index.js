/* let name = 'moritz';
let age = 6; */
const rate = 0.2;
const unrate = 0.1;

function greet(name) {
    console.log('greetings ' + name);
    
}

function sum(number1, number2){
    return number1+number2;
}

let person = {
    name: 'moritz',
    age: 19
};
age = 22;

let selectedColors = ['blue', 'green'];
selectedColors[2] = 'red';

for (let i = 0; i < selectedColors.length; i++){
    console.log('color Nr. ' + i, selectedColors[i]);
};

greet(person.name);

console.log(sum(rate, unrate));

if(age < 20){
    console.log('hello world ');
}else if(age === 20){
    console.log(person.name); //alternative: person['name'] = marc;
    console.log(rate+unrate, rate + age);
};


