function Greet2(greeting: string, ...names: string[]): string {
    return greeting + " " + names.join(", ") + "!";
}

console.log(Greet2("Hola", "Juan", "Jose", "Nicolas")); 
console.log(Greet2("Buenos días", "Ana", "Luis"));  
console.log(Greet2("Hola")); 
 
