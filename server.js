const port = 3000;

const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  res.send(`
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Calculo de Médias</title>
      <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

  </head>
  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #e6ecf0;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button {
    outline: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .headbar {
    height: 100px;
    width: 100%;
    background-color: #3bb9e3;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .headbar h1 {
    color: #fff;
  }

  a {
    margin-top: 80px;
    text-decoration: none
  }

  a:hover {
    text-decoration: underline; 
    color: #f00
    }
  a:active {
    text-decoration: none
    }
  </style>
  <body>
    <div class="content">
      <div class="headbar"><h1>Calcular Médias</h1></div>
      <a href="/media-aritmetica">Clique para calcular sua média aritmética</a>
      <a href="/media-ponderada">Clique para calcular sua média ponderada</a>
    </div>
  </body>
  </html>
  `);
}); 

app.get('/media-aritmetica', (req, res) => {
  res.send(` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular Média</title>
  </head>

  <style> 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #e6ecf0;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button {
    outline: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .headbar {
    height: 100px;
    width: 100%;
    background-color: #3bb9e3;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .headbar h1 {
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 80px;
  }

  form label {
    margin-top: 10px;
  }

  form input {
    margin-top: 10px;
  }
  
  input {
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0px 30px 0px 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    background: #f5f8fa;
  }

  #calculate {
    border: 1px solid #e6ecf0;
    height: 50px;
    padding: 0px 30px 0px 12px;
    border-radius: 15px;
    color: #fff;
    font-size: 20px;
    background: green;

  }
  
  </style>


  <body>
    <div class="content">

      <div class="headbar"><h1>Calcular a Média Aritmética</h1></div>


      <form action="/finalpage" method="POST">
        
        <label for="/finalpage">Nota 1:</label>
        <input type="number" name="noteOne" id="noteOne">
        <label for="/finalpage">Nota 2:</label>
        <input type="number" name="noteTwo" id="noteTwo">
        <label for="/finalpage">Nota 3:</label>
        <input type="number" name="noteThree" id="noteThree">
  
      <input id="calculate" type="submit" value="Calcular">
     </form>
      <br>
      <br>
     <a href="/">Voltar para página inicial</a>

    </div>

  
  </body>
  </html>`)

});

app.get('/media-ponderada', (req, res) => {
  res.send(` <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calcular Média Ponderada</title>
  </head>

  <style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    margin: 0;
    padding: 0;
    background-color: #e6ecf0;
    font-family: Arial, Helvetica, sans-serif;
    height: 100%;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  input, button {
    outline: 0;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .headbar {
    height: 100px;
    width: 100%;
    background-color: #3bb9e3;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .headbar h1 {
    color: #fff;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    margin-top: 80px;
  }

  form label {
    margin-top: 10px;
  }

  form input {
    margin-top: 10px;
  }
  
  input {
    border: 1px solid #e6ecf0;
    height: 34px;
    padding: 0px 30px 0px 12px;
    border-radius: 16px;
    color: #667581;
    font-size: 12px;
    background: #f5f8fa;
  }

  #calculate {
    border: 1px solid #e6ecf0;
    height: 50px;
    padding: 0px 30px 0px 12px;
    border-radius: 15px;
    color: #fff;
    font-size: 20px;
    background: green;

  }
  </style>

  <body>

    <div class="content">

      <div class="headbar"><h1>Calcule a Média Ponderada</h1></div>
      
      <form action="/finalpageTwo" method="POST">
      
      <label for="/finalpageTwo">Nota 1:</label>
      <input type="number" name="noteOne" id="noteOne" placeholder="Nota 1">
      <input type="number" name="noteWeightOne" id="noteWeightOne" placeholder="Peso">


      <label for="/finalpageTwo">Nota 2:</label>
      <input type="number" name="noteTwo" id="noteTwo" placeholder="Nota 2">
      <input type="number" name="noteWeightTwo" id="noteWeightTwo" placeholder="Peso">


      <label for="/finalpageTwo">Nota 3:</label >
      <input type="number" name="noteThree" id="noteThree" placeholder="Nota 3">
      <input type="number" name="noteWeightThree" id="noteWeightThree" placeholder="Peso">      
  
      <input id="calculate" type="submit" value="Calcular">
    </form>

    <br>
    <br>
    <a href="/">Voltar para página inicial</a>

    </div>

   
  </body>
  </html>`)

});


app.post('/finalpage', (req, res) => {
  let noteOne = parseFloat(req.body.noteOne);
  let noteTwo = parseFloat(req.body.noteTwo);
  let noteThree = parseFloat(req.body.noteThree);

  let average = ((noteOne + noteTwo + noteThree) / 3);

  res.send(` <!DOCTYPE html>
  <html lang="en">
  <head>
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado</title>
    <style>
     body {
      background-color: #e6ecf0;
      font-family: Arial, Helvetica, sans-serif;  
     }
  
    h1 {
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 60px;
    }
  
    </style>
  </head>
  <body>
    <h1>Sua Média é ${average}</h1>
  </body>
  </html>`);
});


app.post('/finalpageTwo', (req, res) => {
  let noteOne = parseFloat(req.body.noteOne);
  let noteTwo = parseFloat(req.body.noteTwo);
  let noteThree = parseFloat(req.body.noteThree);

  
  let noteWeightOne = noteWeightOne * parseFloat(req.body.noteWeightOne);
  let noteWeightTwo = noteWeightTwo * parseFloat(req.body.noteWeightTwo);
  let noteWeightThree = noteWeightThree * parseFloat(req.body.noteWeightThree);

  let average = ((noteOne + noteTwo + noteThree) / (noteWeightOne + noteWeightTwo + noteWeightThree)).toFixed(1);

  if (average >= 7) {
      res.send(`Média: ${average}, você está aprovado.`)
  }
  if (average < 7 || average >= 4) {
      res.send(`Média: ${average}, prova final`)
  } else {
      res.send(`Média: ${average}`)
  }

});


app.listen(port, () => {
  console.log(`Rodando na porta http://localhost:${port}`);
});