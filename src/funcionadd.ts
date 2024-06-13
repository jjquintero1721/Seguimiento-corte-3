function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add("Hola", " Mundo")); 
console.log(add("Buenos ", "días")); 
console.log(add(5, 10)); 
console.log(add("¿Cómo ", "estás?")); 
console.log(add("Feliz ", "cumpleaños")); 
console.log(add("Te quiero ", "mucho")); 
