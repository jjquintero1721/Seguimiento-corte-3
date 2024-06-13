function showMes (mes: string) {
    switch (mes) {
    case "enero":
    console.log("Estamos en el mes de enero");
    break;
    case "febrero":
    console.log("Estamos en el mes de febrero");
    break;
    case "marzo":
    console.log("Estamos en el mes de marzo");
    break;
    case "abril":
    console.log("Estamos en el mes de abril");
    break;
    case "mayo":
    console.log("Estamos en el mes de mayo");
    break;
    case "junio":
    console.log("Estamos en el mes de junio");
    break;
    case "julio":
    console.log("Estamos en el mes de julio");
    break;
    case "agosto":
        console.log("Estamos en el mes de agosto");
    break;
    case "septiembre":
        console.log("Estamos en el mes de septiembre");
    break;
    case "octubre":
        console.log("Estamos en el mes de octubre");
    break;
    case "noviembre":
        console.log("Estamos en el mes de noviembre");
    break;
    case "diciembre":
            console.log("Estamos en el mes de diciembre");
     break;
    default:
    throw new Error("mes no valido");
    }
}
    showMes("marzo");