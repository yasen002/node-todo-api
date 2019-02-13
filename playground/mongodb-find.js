//query by value by setting up the key value pair in the 'find' method;
//find a value with a particular ID
// count how many documents we have in a collection
//


const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017',(err, client) =>{
  if(err){
    console.log('there is an err......');
  }
  console.log('Connected to the MongoDB');

  const db = client.db('ToDoApp2');

  // db.collection('myApp').find({
  //   _id: new ObjectID('5c6279d56754a96214770b58')
  // }).toArray((err, docs)=>{
  //   if(err){
  //     console.log('There is an err');
  //   }
  //   console.log(JSON.stringify(docs,undefined,4));


  // db.collection('myApp').find({
  //   _id: new ObjectID('5c627923e76d76e948e8de45')
  // }).toArray().then((result) => { 
  //   console.log(result);
  // }).catch((err) => {
  //   console.log(err);
  // });

  db.collection('myApp').find().count().then((result) => { 
    console.log(`there are ${result} documents in this collection.`);
  }).catch((err) => {
    console.log(err);
  });


  // client.close();
});