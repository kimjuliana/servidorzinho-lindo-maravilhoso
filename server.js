const http = require('http')

const comidas = {
    pratosFavoritos: [
    {
    nome: "Paçoquita",
    descricao: "Doce",
    imagem: "https://http2.mlstatic.com/pacoquita-20g-santa-helena-D_NQ_NP_540215-MLB25162744484_112016-F.jpg"
},
{
    nome: "Batata frita",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/Batata-frita.jpg"
  },
  {
    nome: "Macarronada",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/macarronada.jpg"
  },
  {
    nome: "Falafel",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/falafel.jpg"
  },
  {
    nome: "Creme de abóbora",
    descricao: "Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus. ",
    imagem: "img/creme-de-abobora.jpg"
  },
]
}


const servidor = http.createServer(function (request, response) { //criando o servidor
   if (request.url ==='/') {
       response.end('Hello Wonderful World!')
   } else if(request.url === '/comidas'){
       if(request.method === 'GET'){
           response.writeHead(200, {
               "Content-Type": "application/json",
            'Access-Control-Allow-Origin': "*"
            })
    
        response.write(JSON.stringify(comidas))
          
    
           response.end()
       }else if(request.method === 'POST') {
        response.writeHead(201, {"Content-Type": "text/html; charset=utf-8"})
        response.end("<h1>Respostão diferentona DO POST</h1>")
       }

   }
})

servidor.listen (3000) //falando para o servidor acessar a porta escolhida 3mil p cima melhor
console.log("servidorzinho funcionando na porta 3000")