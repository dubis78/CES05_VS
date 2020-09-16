const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan('dev'));  //Monitorear las peticiones
app.use(express.json()); //Peticiones en formato json

//Routes
app.use('/api/',require('./routes/movies'));

// app.listen(4001,()=>{
//     console.log('El servidor se esta ejecutando en el puerto 4001');
// })

app.set('port',4001);
app.listen(app.get('port'),()=>{
    console.log('El servidor se esta ejecutando en el puerto 4001');
})
