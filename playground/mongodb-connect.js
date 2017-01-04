const {MongoClient, ObjectID} = require('mongodb')

// var obj = new ObjectID
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/toDoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }
  // console.log('Connected to the MongoDB server')

  // db.collection('Todos').insertOne({
  //   text: 'something to do',
  //   completed: false
  // }, (err, res)=>{
  //   if (err){
  //     return console.log('unable to insert todo', err)
  //   }

  //   console.log(JSON.stringify(res.ops, undefined, 2))
  // })
  // db.collection('Users').insertOne({
  //   name: 'Rachel',
  //   age: 26,
  //   location: 'San Diego'
  // }, (err, res)=>{
  //   if (err){
  //     return console.log('unable to insert user', err)
  //   }

  //   console.log(JSON.stringify(res.ops, undefined, 2))
  // })



  db.close()
})