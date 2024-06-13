// objeto de solo lectura
const soiese: {
    readonly nombre: string;
    readonly edad: number; 
} = {
    nombre: "santiago",
    edad: 18
};

console.log(soiese.nombre)

// objeto literal convertido a solo lectura con "as const"
const soiese2 = {
    nombre: "santiago",
    edad: 18
} as const;