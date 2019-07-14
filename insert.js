const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");
const express = require("express");
var app = express();
var url = require('url');

MongoClient.connect('mongodb://127.0.0.1:27017/charge', function (err, con) {
    if (err) console.log(err);
    let db = con.db('charge');
    let count = 0;

    db.createCollection("contacts",
        {
            validator: {
                $and: [
                    {
                        "r": {
                            $type: "string"
                        }
                    },
                    {
                        "n": {
                            $type: "string"
                        }
                    },
                    {
                        "pr": {
                            $type: "int"
                        }
                    },
                    {
                        "da": {
                            $type: "date"
                        }
                    },
                    {
                        "e": {
                            $type: "int"
                        }
                    },
                    {
                        "price": {
                            $type: "string"
                        }
                    },
                    {
                        "sc": {
                            $type: "string"
                        }
                    },
                    {
                        "t": {
                            $type: "string"
                        }
                    },
                    {
                        "text": {
                            $type: "string"
                        }
                    },
                    {
                        "vars": {
                            $type: "string"
                        }
                    }
                ]
            },

            validationLevel: "strict",
            validationAction: "error"
        })
    app.get('/update', function (req, api_res) {

        db.collection('contacts').updateOne({}, {
            $set: {
                r: "0",
                n: "09120975633",
                pr: 9,
                e: count++,
                price: "sdcdcd",
                sc: null,
                t: "05:22:01",
                text: "",
                vars: ""
            }
        }, function (err, res) {
            if (err) console.log(err);
            api_res.send(200);
        })
    });

    app.get('/find', function (req, api_res) {
        db.collection('contacts').findOne({}, function (err, res) {
            if (err) console.log(err);
            api_res.send(200);
        })

    });

    app.get('/insert', function (req, web_res) {
        count++;
        let obj = {
            r: "0",
            n: "09120975633",
            pr: 9,
            e: 1,
            price: "3000",
            sc: null,
            t: "05:22:01",
            text: "",
            vars: ""
        };


        db.collection('contacts').insert(obj, function (err, res) {
            if (err) console.log(err);
            web_res.send(200)
        })


    });

    app.get('/insert-into-one', function (req, web_res) {
        count++;
        let obj = {
            r: "0",
            n: "09120975633",
            pr: 9,
            e: 1,
            price: "3000",
            sc: null,
            t: "05:22:01",
            text: "",
            vars: ""
        };


        db.collection('one').insert(obj, function (err, res) {
            if (err) console.log(err);
            web_res.send(200)
        })


    })

});

app.listen(8085, function (err) {
    if (err) console.log(err);
    console.log('start process on 8080 port ');
})