
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://root:root@hackathoncluster-nreul.mongodb.net/test?retryWrites=true&w=majority";

var data_holder = {}
var db_request = //specify data request

MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("afterklas").collection("user");
   const dbo = client.db("afterklas");
   // perform actions on the collection object

   if(db_request == 1){
     dbo.collection("customers").insertOne(data_holder, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
         db.close();
       });
   }

   if(db_request == 2){
     dbo.collection("customers").insertOne(data_holder, function(err, res) {
         if (err) throw err;
         console.log("1 document inserted");
         db.close();
       });
   }

});
