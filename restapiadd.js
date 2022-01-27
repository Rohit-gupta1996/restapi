var express=require('express');
var rest=express();
var fs=require('fs');


var member=
{
    "member6" : 
    {
        "name" : "Pankaj",
        "id" : "106",
        "domain" : "Reactjs",
        "d_id" : "1006"
    }
}

rest.get('/addlist',function(req,res)
{
   fs.readFile(__dirname+"/"+"member.json",function(error,data)
   {
      data=JSON.parse(data);
      data["member6"]=member["member6"];
      fs.writeFile("member.json",JSON.stringify(data),function(err)
      {
          if(err) throw err
          console.log("saved file")
      })
      res.end(JSON.stringify(data));
   });
})

rest.delete("/deleteUser", (req, res) => {
    // First read existing users.
    fs.readFile(__dirname + "/" + "member.json", (err, data) => {
      data = JSON.parse(data);
      delete data["member" + 4];
      console.log(data);
      res.end(JSON.stringify(data));
    });
  })

  

var restapiadd=rest.listen(8082,function(){

//    var host=restapiadd.address().address
   var port=restapiadd.address().port
   console.log("server is running at port ",port)
})