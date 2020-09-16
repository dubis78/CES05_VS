const {Router} = require ('express');
const router = Router();
const fs = require ('fs');

//leemos el archivo movies.json yt lo almacenamos en la variable movieFile
const moviesFile = fs.readFileSync("routes/movies.json",'utf-8');  //parametro1: ruta del archivo a leer, parametro2: se define la codificacion del archivo a leer
let movies = JSON.parse(moviesFile); //covertimos info a JSON

router.get("/",(req,res)=>{   
    res.json("API REST Movies"); 
});

router.get('/movies',(req,res)=>{   //tarea que se ejecuta al recibir solicitud GET en la ruta  http://localhost:4001/api/movies
    res.status(200).json(movies);  //.status(200) es la respuesta status que retorna el servidor
});

router.get("/movies/:id", (req, res) => {  //tarea q se ejecuta al recibir un GET en la ruta http://localhost:4001/api/movies/id
    const id = req.params.id;
    res.json(movies.filter((movie) => movie.id == id));
});


router.post('/movies',(req,res)=>{
    const {title,director,year,duration,genre,poster}=req.body;
    //validacion de datos
    if(!title || !director || !year || !duration || !genre || !poster){
        res.status(401).json({Error:"Debe ingresas todos los datos de la pelicula."});
    }
    else{
        const id = movies.length + 1;
        let newMovie = {id,title,director,year,duration,genre,poster,};
        movies.push(newMovie);
        const json_movies = JSON.stringify(movies);  //JSON.stringify es un metodo para pasar de arreglo JS a JSON
        fs.writeFileSync("routes/movies.json",json_movies, "utf-8");
        res.status(201).json(movies);
    }
});


router.put("/movies/:id", (req, res) => {
    const { title, director, year, duration, genre, poster } = req.body;
    const id = req.params.id;    
    if (!title || !director || !year || !duration || !genre || !poster || !id) {
        res.status(401).json(
            { error: "Debe completar todos los datos y/o especificar el id." });
    } 
    else {            
        movies.filter((movie) => {
            //comparamos el id del objeto con el id del parametro  
            if (movie.id == id) {
                //Actualizamos el objeto
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.duration = duration;
                movie.genre = genre;
                movie.poster = poster;
            }      
        });          
        const json_movies = JSON.stringify(movies);
        fs.writeFileSync("./movies.json", json_movies, "utf-8");      
        res.status(201).json(movies);
    }
});
  

router.delete("/movie/:id", (req, res) => {
    const id = req.params.id;
    const indexMovie = movies.findIndex((movie) => movie.id == id);
    movies.splice(indexMovie, 1);      
    const json_movies = JSON.stringify(movies);
    fs.writeFileSync("./routes/movies.json", json_movies, "utf-8");      
    res.status(200).json(movies);   
});


module.exports = router;











