const express= require('express');


var app= express();

app.get('/',function(req,res){
  res.send('hello I am here for test');
});

app.listen(3000,function(){console.log('appication is listening at 3000')});
