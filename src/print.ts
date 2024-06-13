let Print = (mensaje: string) => console.log(mensaje);

Print("Hola, Profe");
Print("Hablemos claro");
Print("Me merezco un 5 en este seguimiento.");

let Introduce = (nombre: string, edad: number) => {
    Print(`mi nombre es ${nombre} y tengo ${edad} años.`);
};

Introduce("Juan Jose Quintero", 17);
Introduce("Santiago Carmona", 18);
