const express = require('express')


const app = express()

app.get ('/',(req, res)=>{
    

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio</title>
</head>
<body>
<h1>Bienvenidos a mi pagina</h1>
    <p>Hola soy Iván Silva</p>
</body>
</html>


`;

res.send(htmlContent)
})


const PORT = 3000
app.listen(PORT, ()=>{console.log(`Escuchando en el puerto  ${PORT} `)})