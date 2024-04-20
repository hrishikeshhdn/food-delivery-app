// const mongoose = require('mongoose');
// const mongoURI = "mongodb://goFood:Hrishi@3@2@1@ac-r2pzyua-shard-00-00.01kxdaz.mongodb.net:27017,ac-r2pzyua-shard-00-01.01kxdaz.mongodb.net:27017,ac-r2pzyua-shard-00-02.01kxdaz.mongodb.net:27017/gofoodmern?ssl=true&replicaSet=atlas-7ej0w6-shard-0&authSource=admin&retryWrites=true&w=majority"
// const mongoDB = async () => {
//     try {
//         mongoose.set('strictQuery', false)
//         mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
//             console.log('Mongo connected')
        
//         const fetched_data = await mongoose.connection.db.collection('food_items');
//         fetched_data.find({}).toArray(function(err,data){
//             if(err) console.log(err);
//             else console.log(data);
//         });  
//         //  const data = fetched_data.find({}, { projection: {} }).toArray();
//         //   console.log(data);
//         })
//     } catch (err) {
//         console.log("---", err);
//     }
// }
// module.exports = mongoDB;
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://goFood:Hrishi%403%402%401@cluster0.01kxdaz.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const mongoDB = async () => {

    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        
        
        try {
            console.log('Mongo connected');

            const fetched_data = await mongoose.Connection.db.Collection('food_items');
            fetched_data.find({}).toArray(function (err, data) {
                if (err) console.log("Not found",err);
                else console.log(data);
            })
        }

        catch {
            console.log("error", err);
        }

    });

}
module.exports = mongoDB;
