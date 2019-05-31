const express = require('express')
const cors = require('cors')
const controller = require('./ComidasController')

// controller.get()



const servidor = express()
servidor.use(cors())

servidor.get("/comidas", (request, response) => {
  // response.header('Access-Control-Allow-Origin', '*')
  response.send(controller.getAll())
})


servidor.listen (3000) //falando para o servidor acessar a porta escolhida 3mil p cima melhor
console.log("servidorzinho funcionando na porta 3000")