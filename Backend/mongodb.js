const express = require('express')
const MongoClient = require('mongodb').MongoClient

const app = express()

app.use(express.json())
var database

app.get('/',(req, resp) => {
    resp.send('Welcome toMongodb Api')
})

app.get('api/food_items',(req,resp) =>{
database.collection('food_items').find({}).toArray((err, result) =>{
    if(err) throw err
    resp.send(result)
})
})

app.listen(5000, () =>{
    MongoClient.connect('mongodb+srv://goFood:Hrishi@3@2@1@cluster0.01kxdaz.mongodb.net/gofoodmern?retryWrites=true&w=majority', { useNewUrlParser:true },(error, result) =>{
        if(error) throw error
        database = result.db('gofoodmern')
        console.log("Connected Successfully")
    })
})


