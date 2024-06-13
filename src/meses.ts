function showDay(año: number) {
    switch (año) {
     case 2010:
        console.log("2010??");
        break;
     case 2011:
        console.log("2011??");
        break;
     case 2012:
        console.log("Aqui se acabo el mundo");
        break;
     case 2013:
        console.log("2013 xd");
        break;
     case 2014:
        console.log("2014 v:");
        break;
     case 2015:
        console.log("2015 🤔 uwu");
        break;
     case 2016:
        console.log("2016??");
        break;
     default:
        throw new Error("vienes del futuro??");
    }
} 
showDay(2012); 