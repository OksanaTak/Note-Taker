const app = require('express').Router()
//db
let db = require('../db/db.json')
const fs = require('fs')

app.get('/notes', function (req, res) {
  db = JSON.parse(fs.readFileSync('./db/db.json')) || []
  res.json(db)
})
app.post('/notes', function (req, res) {
  let userNote = {
    title: req.body.title,
    text: req.body.text,
    id: Math.floor(Math.random() * 9999)
  }
  db.push(userNote)
  fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
    if (err) throw err
  })
  res.json(db)
})

app.delete('/notes/:id', function (req, res) {
  let userNote = []
  for (let i = 0; i < db.length; i++) {
    if (db[i].id != req.params.id) {
      userNote.push(db[i])
    }
  }
  db = userNote
  fs.writeFile('./db/db.json', JSON.stringify(db), function (err) {
    if (err) throw err
  })
  res.json(db)
})
module.exports = app
