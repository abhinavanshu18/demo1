////const MongoClient = require('mongodb').MongoClient;
////
////MongoClient.connect("mongodb://localhost:27017/TodoApp",(err,db) => {
////    if(err){
////      return console.log('Unable to connect to MongoDB server');    
////    }
////    console.log('Connected to MongoDB server');
////    
////    db.close();
////})
////
////MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
////
////    db.close();
////})
////
////MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
////    if(err){   
////    }
////    db.close();
////})
//
//const {MongoClient,ObjectID} = require('mongodb');
//
//
//MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err,client) => {
//    if(err){
//        return console.log('Unable to connnect to mongodb');
//    }
//    console.log('Connected to MongoDB server');
//    const db = client.db('TodoApp')
//    
//    db.collection('Todos').insertOne({
//        text:'Something to do',
//        completed: true
//    },(err, result) => {
//        if(err){
//            return console.log('Unable to insert todo', err);
//        }
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
//    client.close();
//})
//
//const MongoClient = require('mongodb').MongoClient;
//
//MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, client) => {
//    if(err) {
//      return console.log("Unable to connect to the db.");
//    }   
//    console.log('Connected to db successfully');
//    const db = client.db('TodoApp');
//    
//    db.collection('Todos').insertOne({
//        text:'Something else to do today',
//        completed: false
//    },(err,result) => {
//        if(err){
////            return console.log()
//        }
//        console.log("Result : ",result);
//    })
//    
//    
////    db.collection('TodoApp').insertOne({
////        text:'Abhi',
////        status: true
////    },(err,result) => {
////        
//    })
//    
////    db.colletion('TodoApp').insertOne({
//        
////    })
//    
////    db.collection('TodoApp').insertOne({})
////client.close();
//})

const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
    const db = client.db('TodoApp');
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');
    
    db.collection('Todos').find({status:true}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined,2))
    });
    
    client.close();
});

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,client) => {
  const db = client.db;
  db.collection('Todos').find({status:false}).toArray().then((docs) => {
    console.log("Content inside the docs : ", docs);  
  })
    client.close();
})