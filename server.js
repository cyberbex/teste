const express = require('express');
const app = express();

//Porta que o server irá escutar
const port = 3000;

app.use(express.static(__dirname + '/public'));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'./public/index.html')
});




app.listen(port, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
 