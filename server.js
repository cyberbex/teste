const express = require('express');
const app = express();
const fs = require('fs').promises;
const path = require('path');
const caminhoArquivo = path.resolve(__dirname,'.' ,'valores.json');


//Porta que o server irá escutar
const port = 3000;
var valores = [];

app.use(express.static(__dirname + ''));


app.get('/',(req,res)=>{
    res.sendFile(__dirname+'./index.html')
    
});

app.get('/sensores/:temp?/:humidade?/:adc?',(req,res)=>{
    
   console.log(req.query.temp);
   console.log(req.query.humidade);
   console.log(req.query.adc);
  //const json = req.query;
  
  valores[0] = req.query.temp;
  valores[1]= req.query.humidade;
  valores[2] = req.query.adc;
  
  var valorEsp = [

      { id:1, label:'temperatura', valor: valores[0]},
      { id:2, label:'humidade',valor: valores[1]},
      { id:3, label:'adc',valor: valores[2]},
  ];
  
  const json = JSON.stringify(valorEsp);

  fs.writeFile(caminhoArquivo, json , { flag: 'w' });

  res.send(valores[0]);
  
}); 


app.listen(port, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
});
 