
const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://goFood:Hrishi%403%402%401@cluster0.01kxdaz.mongodb.net/gofoodmern?retryWrites=true&w=majority"
const mongoDB = async () => {

    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI, { useNewUrlParser: true }, async (err, result) => {
        if (err) console.log('Not found', err)
        else {
            console.log('Mongo connected');

            const fetched_data = await mongoose.connection.db.collection('food_items');
            fetched_data.find({}).toArray(async function (err, data) {
                const food_category = await mongoose.connection.db.collection('food_category');
                food_category.find({}).toArray(function (err, catData) {
                    if (err) console.log(err);
                    else {
                        global.food_items = data;
                        global.food_category = catData;
                    }
                })
                // if (err) console.log(err);
                // else {
                //     global.food_items = data;

                // }
            })
        }

    });

}
module.exports = mongoDB;
