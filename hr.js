const express = require("express");
const app = express();

const mongoose = require("mongoose");
/*
mongoose.createConnection('mongodb://127.0.0.1:27047/charge', { "auth": { "authSource": "admin" }, user:'root' , pass:'123456',useNewUrlParser: true },(err)=>{
         if (err) console.log(err);
    if(!err){
        console.log("connected success fully");
    }
});
*/

// mongoose.connect('mongodb://127.0.0.1:27047/charge', { "auth": { "authSource": "admin" }, user:'root' , pass:'123456',useNewUrlParser: true },(err)=>{
mongoose.connect('mongodb://127.0.0.1:27017/charge',(err)=>{
    if (err) console.log(err);
    if(!err){
        console.log("connected success fully");
    }
});
const Charge = mongoose.model('charge1', new mongoose.Schema({
    r: {
        type: String,
        required: true
    },
    n: {
        type: String
    },
    pr: {
        type: Number
    },
    da: {
        type: Date,
        default: Date.now
    },
    e: {
        type: Number
    },
    price: {
        type: String
    },
    sc: {
        type: String
    },
    t: {
        type: String
    },
    text: {
        type: String
    },
    vars: {
        type: String
    }
}));


app.get("/mongo-client/:count",async (req,res)=>{
    res.send("hi "+req.params.count);
});


app.get("/mongoose/insert", (req,res)=>{
    
    // let counter = 0;
    // let endString = 0;

    // const now = Math.floor(Date.now() / 1000);
    // for(i=0;i<req.params.count;i++){

    const charge = new Charge({
        r: "0",
        n:"09120975633",
        pr: 9,
        e: 1,
        price:"3000",
        sc:null,
        t:"05:22:01",
        text:"",
        vars:""
    });
            charge.save().then(()=>{

                res.send(200)

            }).catch(()=>{
                console.log('fa;seeeeeeeeeeeeeeeeeee');
                res.send(500);

            });


    //     if ((counter % 500) == 0) {
    //         let ends = Math.floor(Date.now()/1000) - now;
    //         endString = `end in ${counter} number = ${ends} second`;
    //     }
    //     console.log(endString);
    // }
});

app.get("/mongoose/update",async (req,res)=>{
    res.send("okey");
    // let counter = 0;
    // let endString = 0;

    Charge.update({},{
        $set:{
            r: "0",
            n:"09120975633",
            pr: 9,
            e: 1,
            price:"3000",
            sc:null,
            t:"05:22:01",
            text:"",
            vars:""
        }
    }).then(()=>{
        res.status(200).send("done");

    }).catch(()=>{
        res.send(500);

    });
    // let ends = Math.floor(Date.now()/1000) - now;
    // endString = `end in ${counter} number = ${ends} second`;

    // console.log(endString);

});
var count = 0 ;
app.get("/mongoose/updateOne",async (req,res)=>{
    
    // for(i=0;i<req.params.count;i++){
    Charge.updateOne({},{
        $set:{
            r: "0",
            n:"09120975633",
            pr: 9,
            e: count++,
            price:"sdcdcd",
            sc:null,
            t:"05:22:01",
            text:"",
            vars:""
        }
    }).then(()=>{
        res.send(200);
    }).catch((ex)=>{
    console.log('errror ', ex);
    });
    //     if ((counter % 500) == 0) {
    //         let ends = Math.floor(Date.now()/1000) - now;
    //         endString = `end in ${counter} number = ${ends} second`;
    //     }
    //     console.log(endString);
    // }
});

app.get("/mongoose/delete",async (req,res)=>{

    Charge.deleteOne({r: "0"}).then(()=>{
        res.status(200).send("done");
        process.stdout.write('done'+'\n');
    }).catch(()=>{
        res.send(500);
        process.stdout.write('fail'+'\n');
    });

});

app.get("/mongoose/select", (req,res)=>{
    // for(i=0;i<req.params.count;i++){
        Charge
        .findOne().then((data)=>{
            
            res.send(200);
        }).catch((ex)=>{
            console.log('error ',ex);
        })
});

app.listen(8080,(err)=>{
     if (err) console.log(err);
    console.log("app is running in "+ 8090);
});