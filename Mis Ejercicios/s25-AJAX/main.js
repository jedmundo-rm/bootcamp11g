
// https://database-d9257-default-rtdb.firebaseio.com/11g/israel/mentors/.json

// Metodos de objetos
// Object.keys() => devuelve un array con las llaves de un objeto
// Object.values() => devuelve un araray con los values de cada llave
// Object.entries => devuelve un array bidimencional, pone las llaves y los valores del objeto

// for( key in object){}

const getMentors = () => {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           let mentors = JSON.parse(xhttp.responseText);

           console.log('mentors:', mentors)

           /*console.log( Object.keys(mentors))
           console.log( Object.values(mentors))
           console.log( Object.entries(mentors))*/

           Object.values(mentors).forEach((mentor) => {
               console.log(mentor)

               console.log(mentor.name)
           })

           for( key in mentors) {
               console.log('key:', key)
               console.log(mentors[key])
           }
        }
    };

    xhttp.open("GET", "https://database-d9257-default-rtdb.firebaseio.com/11g/israel/mentors/.json", true);
    xhttp.send();
}

getMentors();

////////////////////////////////////////////////////////////////

let mentor = {
    name: "David",
    scores: []
}
const saveMentor = () => {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
           // Typical action to be performed when the document is ready:
           let response = JSON.parse(xhttp.responseText);

           console.log('response:', response)
        }
    };

    xhttp.open("POST", "https://database-d9257-default-rtdb.firebaseio.com/11g/israel/mentors/.json", true);
    xhttp.send(JSON.stringify(mentor));
}

saveMentor();