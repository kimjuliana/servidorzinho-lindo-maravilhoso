const repository = require('./ComidasRepository')
const comidas = {
    pratosFavoritos: []
}


const getAll = () => {
    return repository.comidas
}
const add = (comida) => {
    comida.id = Math.random().toString(36).substr(-8)
    getAll().pratosFavoritos.push(comida)
}

const remove = (id) => {
  let comidasRestantes = getAll()

  getAll().pratosFavoritos = comidasRestantes.pratosFavoritos.filter((comida) => {
    return comida.id !== id
  })
}
module.exports = {comidas, getAll, add, remove}