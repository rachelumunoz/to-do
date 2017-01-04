const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {ToDo} = require('./models/toDo');
const {User} = require('./models/user');

const app = express();

app.use(bodyParser.json());

app.post('/toDos', (req, res)=>{
  // console.log(req.body)
  var toDo = new ToDo({
    text: req.body.text
  })

  toDo.save().then((todo)=>{
    res.send(todo);
  }, (e)=>{
    res.status(400).send(e);
  })
})



app.listen(3000, ()=>{
  console.log('started on port 3000')
});