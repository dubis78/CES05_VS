const fs = require('fs');

fs.writeFile('prueba.txt','=(*w*)=',(err)=>{   //uso de metodo escribir info en archivo prueba.txt
    if(err){
        return console.log(err);
    }
});

fs.readFile('prueba.txt',(err,data)=>{   //uso de metodo leer la info almacenada en archivo prueba.txt
    if(err){
        return console.log(err);
    }
    else{
        return console.log(data);
    }
});

fs.readFile('prueba.txt','utf-8',(err,data)=>{   //uso de metodo leer la info almacenada en archivo prueba.txt
    if(err){
        return console.log(err);
    }
    else{
        return console.log(data);
    }
});

fs.readFile('noExiste.txt','utf-8',(err,data)=>{   //uso de metodo leer la info almacenada en archivo prueba.txt
    if(err){
        return console.log(err);
    }
    else{
        return console.log(data);
    }
});




