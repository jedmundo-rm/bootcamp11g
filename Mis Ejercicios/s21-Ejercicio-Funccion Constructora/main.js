let someObject = {
    name: "Jaime",
    greeting: function(){
        connsole.log("hola soy Jaime")
    }
}

console.log(someObject)


// Funcion constructora
function Mentor(name){
    // el nombre de este mentor va a ser lo que le pasemos como parametro
    this.name = name,
    this.greeting = function(){
        console.log(`Hola soy ${this.name}`)
    }
}

let jaime = new Mentor("Jaime")
console.log(jaime)

