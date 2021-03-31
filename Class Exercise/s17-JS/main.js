
const koderObject = {
    name: 'Aaron',
    lastName: 'Barcenas',
    generation: '11'
}


// declaracion

function Koder(name, lastName, generation,  birthDate, bootcamp, scores){
    this.name = name;
    this.lastName = lastName;
    this.generation = generation;
    this.birthDate = birthDate;
    this.bootcamp = bootcamp;
    this.school = "Kodemia";
    this.scores = scores;
    this.greet = function(){
        console.log(`Hola mi nombre es ${this.name} y soy de la generacion ${this.generation} de ${this.bootcamp}`)
    }
    this.asking = function(question, mentor){
        console.log(`${mentor}, tengo dudas sobre ${question}`)
    }

    // Obtener la edad a partir de la fecha de nacimiento
    this.getAge = function(){
        let today = new Date();
        let birthDate =  new Date(this.birthDate);
        let age = today.getFullYear() - birthDate.getFullYear()
        return age;
    }

    //Obtener promedio de sus scores
    this.getAvg = function(){
        const sumaScore = this.scores.reduce((accum, current) => {
            return accum += current.score
        }, 0)

        const avg = sumaScore / this.scores.length

        return avg
    }


}

// instanciar

const koderDiana = new Koder('Diana', 'Ibanez', 11, '1992/06/03', 'Peru', 'JavaScript', 'KoderHouse')

console.log(koderDiana)

const koderTaquito = new Koder('Veronica', 'Paredes', 11, '1992/06/03', 'Mexico', 'JavaScript')

console.log(koderTaquito)





/****************************** */
/*
Teniendo la siguiente coleccion de Koders generar una coleccion de objetos de tipo Koder. Agregando además las siguientes funciones:

    Obtener la edad a partir de la fecha de nacimiento

    Obtener promedio de sus scores

    Colección de Koder que pertenezcan a JavaScript

    Colección de Koder que pertenezcan a Python
*/

const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]


console.log('********** Generar la coleccion de tipo Koder y no "Normales" | con forEach() ***********')

const kodersArray = []

kodersCollection.forEach((current, index) => {
    let koder = new Koder(current.name, current.lastName, current.generation, current.birthday, current.bootcamp, current.scores)
    kodersArray.push(koder)
})

console.log(kodersArray)


console.log('********** Generar la coleccion de tipo Koder y no "Normales" | con map() ***********')

const koders = kodersCollection.map((current, index) => {
    return new Koder(current.name, current.lastName, current.generation, current.birthday, current.bootcamp, current.scores)
})

console.log(koders)


console.log('********** Mostrar Promedio ***********')

kodersArray.map((item, index) => {
    console.log(`la edad de ${item.name} es ${item.getAge()}`);
    //console.log(item);

})



console.log('********** filter() con if ***********')

const kodersJS = kodersCollection.filter((current) => {
    if(current.bootcamp === 'JavaScript'){
        return current
    } 
})

console.log(kodersJS)

console.log('********** filter() con return implicito ***********')

const kodersJS2 = kodersCollection.filter((current) => {
    return current.bootcamp === 'Python'
})

console.log(kodersJS2)