const {MongoClient, ObjectID} = require('mongodb')

// var obj = new ObjectID
// console.log(obj)
MongoClient.connect('mongodb://localhost:27017/toDoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server')
  }

  // db.collection('Todos').find({
  //   _id: new ObjectID('5822c44c580e140974816dd9')
  // }).toArray().then((docs)=>{
  //   console.log('Todos:')
  //   console.log(JSON.stringify(docs, undefined, 2))
  // }, (err)=>{
  //   console.log('unable to fetch todos', err)
  // })
    db.collection('Todos').find().count().then((count)=>{
    console.log('todos count:', count)
  }, (err)=>{
    console.log('unable to fetch todos', err)
  })

  // db.close()
})