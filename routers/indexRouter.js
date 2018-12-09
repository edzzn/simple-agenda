var express = require('express')
var router = express.Router()

const {
  Persona,
} = require('../sequelize')

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', {
    title: 'Agenda'
  })
})

/* GET perfil page. */
router.get('/perfil', (req, res) => {
  res.render('perfil', {
    title: 'Perfil'
  })
})

/* GET nueva persona page. */
router.get('/nuevo', (req, res) => {
  res.render('nuevo', {
    title: 'Nueva Persona'
  })
})

/* GET editar persona page. */
router.get('/editar', (req, res) => {
  res.render('editar', {
    title: 'Editar persona'
  })
})

/* GET editar persona page. */
router.get('/eliminar', (req, res) => {
  res.send('Eliminar persona')
})

module.exports = router
