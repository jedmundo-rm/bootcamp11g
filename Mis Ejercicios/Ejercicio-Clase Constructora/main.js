
class Mentor{
    constructor(name){
        this.name = name
    }
}

class AuxiliarMentor extends Mentor{
    constructor(name, bootcamp){
        super(name);
        this.bootcamp = bootcamp
    }
}


let someMentor = new AuxiliarMentor("Fernanda", "Python")
console.log('someMentor:', someMentor)


// Clase AuxiliarMentor sin Heredar

class AuxiliarMentor2{
    constructor(name, bootcamp){
        this.name = name
        this.bootcamp = bootcamp
    }
}

let someMentor2 = new AuxiliarMentor2("Fernanda", "Python")
console.log('someMentor2:', someMentor2)
