type Santiago = {
    name: string;
    gei: boolean;
    }|{
    heterosexual: boolean;
    homosexual: boolean;
    };
    
    let x: Santiago = { name: "Juan", gei: false };
    x = { heterosexual: true, homosexual: false };