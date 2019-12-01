
// Require npm modules
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
const path = require('path');

// Require user made modules
const reqFn = require('./util')

app.use(express.static(__dirname + '/views'));

// setting view engine [ejs] other option also available
app.set('view engine', 'ejs');
 

// middle ware
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000 }));


//normal get request
app.get('/',(req,res)=>{

    res.send("data");

})

//sending html string

app.get('/html-string',(req,res)=>{

    res.send("<h1>data</h1>");

})

// sending html file
app.get('/html',(req,res)=>{

    res.sendFile(path.join(__dirname + "/public/index.html"));

})

//sending json
app.get('/json',(req,res)=>{

   res.json({
       name:"sarthak",
       age:21,

   })

})


// get request with param

app.get('users/:name',(req,res)=>{
    var name = req.params.name;
    res.send(name);

})

// render ejs and passing values
app.get("/ejs",(req,res)=>{

    res.render('./pages/index',{
        name:['sarthak','sejal','monga'],
        msg:['hi','hello','hahha']
    });

}); 

// post req
app.post('/api',(req,res)=>{

    var name =req.body.name;
    var email= req.body.email;
      console.log(name,email);
});








// starting app/server on port 3000
app.listen(3000);




//example on how to make java script sync

data(3000).then((result)=>{

    console.log(result)
 
})

//using promise
function data(val) {
    return new Promise(function (resovle, reject) {

        setTimeout(function () { resovle( val); }, val);
    });


}
