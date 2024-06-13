
function Greet(name: string,greeting: string = "Hello", edad: string = " Edad 17") : string { 
return greeting + ' ' + name + ' ' + edad + '!';
}

console.log(Greet('Camilo'))
console.log(Greet('Juan Jose'))
console.log(Greet('Miguel'))