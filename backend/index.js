const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
const mongoURL = "mongodb+srv://abhinav:testpass@internshipdb.3ectb.mongodb.net/sample_restaurants?retryWrites=true&w=majority";
const cors = require('cors');
let db;
app.use(cors());
app.set('json spaces', 2);

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//All restaurant details 
app.get('/',(req,res)=>{
    db.collection('restaurants').find( {} ).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    }); 
});

//All unique Boroughs
app.get('/locations',(req,res) => {
    db.collection('restaurants').distinct('borough', function(err, docs) {
        if(err) throw err;
        res.send(docs);
    });
});

//All details of Restaurant in a specific borough
app.get('/locations/:boroughName',(req,res) => {
    var data = req.params.boroughName;
    db.collection('restaurants').find({"borough":data}).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    });
});

//All unique Cuisines
app.get('/cuisines',(req,res) => {
    db.collection('restaurants').distinct("cuisine", function(err, docs) {
        if(err) throw err;
        res.send(docs);
    });
});

//All details of restaurants having specific Cuisines
app.get('/cuisines/:cuisineName',(req,res) => {
    var data = req.params.cuisineName;
    db.collection('restaurants').find({"cuisine":data}).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    });
});

//Detail of one specific restaurant
app.get('/restaurant/:restaurant_id',(req,res) => {
    var data = req.params.restaurant_id;
    db.collection('restaurants').find({"restaurant_id":data}).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    });
});

app.get('/restaurantList', (req,res) => {
    var query = {};
    if(req.query.borough && req.query.cuisine){
        query={"borough":req.query.borough,"cuisine":req.query.cuisine}
    }
    else if(req.query.borough){
        query={"borough":req.query.borough}
    }
    else if(req.query.cuisine){
        query={"cuisine":req.query.cuisine}
    }
    
    db.collection('restaurants').find(query).toArray((err,result) => {
        if(err) throw err;
        res.send(result);
    })
})


//Orders:
app.get('/orders',(req,res) => {
    db.collection('orders').find({}).toArray((err,result) => {
        if(err) throw err
        res.send(result)
    });
});

app.post('/placeorder',(req,res) => {
    db.collection('orders').insertOne(req.body,(err,result) => {
        if(err){
            throw err
        }
        else{
            res.send('Data Added')
        }
    });
});

MongoClient.connect(mongoURL,{useUnifiedTopology: true, useNewUrlParser: true},(err,client) => {
    if(err) console.log(err);
    db = client.db('sample_restaurants');
    app.listen(port,(err) => {
        if(err) throw err;
        console.log(`Server is running on port ${port}`);
    })
})