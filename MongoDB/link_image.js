
const MongoClient = require('mongodb').MongoClient;
var fs = require('fs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var multer = require('multer');

GridFSBucket = require("mongodb").GridFSBucket;

const uri = "mongodb+srv://root:root@hackathoncluster-nreul.mongodb.net/test?retryWrites=true&w=majority";

var imgPath = './questions/image.png';


MongoClient.connect(uri, function(err, client) {
   if(err) {
        console.log('Error occurred while connecting to MongoDB Atlas...\n',err);
   }
   console.log('Connected...');
   const collection = client.db("afterklas").collection("user");
   const dbo = client.db("afterklas");
   // perform actions on the collection object
   var bucket = new GridFSBucket(dbo, {
       chunkSizeBytes: 1024,
       bucketName: 'images'
   });

   fs.createReadStream(imgPath).pipe(
    bucket.openUploadStream('question.jpg')).on('error', function(error) {
    console.log('Error:-', error);
    }).on('finish', function() {
    console.log('File Inserted!!');
    process.exit(0);
    });

    try {
    var readstream = GridFSBucket.createReadStream({_id: id});
    readstream.pipe(res);
    } catch (err) {
        console.log(err);
    }

});
