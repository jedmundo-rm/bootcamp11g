
function getInitials(name){
    // separamos en arrays las palabras
    const nameSplitted = name.split(" ")
    console.log(nameSplitted)

    // creamos una variable donde almacenar las inciales
    let initials = ""

    //recorrer cada elemento
    nameSplitted.forEach((word) => {
        console.log(word.charAt(0))
        initials += word.charAt(0) + "."
        console.log(initials)
    })

    return initials
}

getInitials("Jaime Edmundo");

/***************** */

function getVocals(...string){
    console.log(string)

    const object = {}
    
    string.forEach((str) => {
        // regresa los elementos que coinciden con la coincidencia
        const quantity = str.match(/[aeiou]/gi).length
        object[str] = quantity
    })

    return object
}

console.log(getVocals("Hola", "Koders", "Hola Koders", "Hola", "Koders"))

/***************** */

arrayKoders = [
	[
		["name", "Ruben"],
		["lastName", "Alvarez"],
		["generation", 1],
        ["bootcamp", "python"],
        ["score", 90]
	],
	[
		["name", "Andre"],
		["lastName", "Alvarez"],
		["generation", 1],
        ["bootcamp", "python"],
        ["score", 90]
	]
]



const newArrayKoders = arrayKoders.map((arrayproperties)=>{
    console.log(arrayproperties)
    const objectKoder = arrayproperties.reduce((object, koderProperty) => {
        console.log(koderProperty)

        const key = koderProperty[0]
        const value = koderProperty [1]
        object[key] = value

        return object
    }, {})

    console.log(objectKoder)
    //return objectKoder

    return new koder(objectKoder.name, objectKoder.lastName)
})

