import { useEffect, useState } from "react"

export default function AppRickAndMorty(){

    const[characters, setCharacters] = useState([]);
    const [prev, setPrev] = useState(null);
    const [next, setNext] = useState(null)




    // usamos un hook de efect
    // recupera la informacion una vez que el componente ya este cargado y solo una vez
    // useEffect(() => {
    //     console.log("holi")

    //     fetch("https://rickandmortyapi.com/api/character")
    //     .then((response) => response.json())
    //     .then((json) => {
    //         setCharacters(json.results);
    //         setPrev(json.info.prev);
    //         setNext(json.info.next);
    //     })

    //     console.log(characters)
    // }, [])  // con el array vacio hacemos el Component Did Mount


    // usamos un hook de efect
    // recupera la informacion una vez que el componente ya este cargado y solo una vez
    useEffect(() => {

        fetch("https://rickandmortyapi.com/api/character")
        .then((response) => response.json())
        .then((json) => {
            setCharacters(json.results);
            setPrev(json.info.prev);
            setNext(json.info.next);
        })

        console.log(characters)


        fetch("https://react-11g-default-rtdb.firebaseio.com/posts/-MbsYe-a6mu-23-9DiKb.json", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify({
                title: "Mi gato MODIFICADO",
                description: "Este es mi gato MODIFICADO",
                author: "James", 
                image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/10E9B/production/_109757296_gettyimages-1128004359.jpg"
            }),
        })
        .then((response) => response.json())
        .then((json) => {
            console.log((json))
        })


    }, [])  // con el array vacio hacemos el Component Did Mount


    const buildCard = ({ id, name, image}) => (
        <div key={id} className="col justify-content-center d-flex">
            <div className="card" style={{width: "18rem"}}>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );

    const getNextPage = () => (

        fetch(next)
        .then((response) => response.json())
        .then((json) => {
            setCharacters(json.results);
            setPrev(json.info.prev);
            setNext(json.info.next);
        })
    )

    const getPrevPage = () => (

        fetch(prev)
        .then((response) => response.json())
        .then((json) => {
            setCharacters(json.results);
            setPrev(json.info.prev);
            setNext(json.info.next);
        })
    )

    return (
        <div className="container">
            <div className="row">
                <div className="col justify-content-center d-flex flex-wrap">
                    {characters.map(buildCard)}
                </div>

                <div className="row">
                    <div className="col justify-content-center d-flex flex-wrap p-5">
                    <button disabled={prev === null ? true: false} type="button" className="btn btn-primary btn-lg" onClick={getPrevPage}>Prev</button>
                    <button disabled={next === null ? true: false} type="button" className="btn btn-primary btn-lg" onClick={getNextPage}>Next</button>
                    </div>
                </div>

            </div>
        </div>
    );
}