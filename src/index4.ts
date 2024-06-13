// unión de tipos de objetos
type MyUnion = {
    name: string;
    age: number;
    }|{
    email: string;
    phone: string;
    date: string
    };
    let b : MyUnion = { name: "Juan Jose", age: 17 };
    b = { name:"Juan Jose", email: "jjquintero_9@cue.edu.co", phone: "311407816", age: 17, date: "7/2/2024"};

    console.log(b)