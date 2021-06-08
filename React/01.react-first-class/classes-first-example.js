class Cuadrilatero{
    lado1 = 5;
    lado2 = 3;
    lado3 = 5;
    lado4 = 3;
}

const cuadrado = new Cuadrilatero()
console.log('cuadrado:', cuadrado)

class Triangle {}
const t1 = new Triangle()
console.log('t1:', t1)

const now = new Date()



class BlogText{
    constructor(props){
        this.text = props.text;
        this.date = props.date;
    }
}


class post extends BlogText{
    constructor(props){
        this.date = props.date;
    }
}


const p1 = new post({

})

