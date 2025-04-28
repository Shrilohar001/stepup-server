var express = require('express');
var mongodb=require('mongodb')
var router = express.Router();


/* GET users listing. */
router.get('/',  function(req, res, next) {
  res.send('respond with a resource');
});
router.post('/register/:loc',async function(req,res,next){
  try{
  //recive the re//take the data from req//
  const name= req.query.name  
  const loc=req.params.loc
  const phone=req.headers.phone;
  const email=req.body.email; 

  //connect the db
  const url="mongodb+srv://stepup:stepup@shri.mlcimqn.mongodb.net/"
  const client=mongodb.MongoClient
  const server=await client.connect(url)
  const db=server.db("stepup")
  const collection= db.collection('users')
  // //perform some opreations
  const result=await collection.insertOne({name,loc,phone,email})
  //preprae the response
  //send it back to client
  res.send(result);

  }catch(ex){
    console.error(ex);
    res.send(ex.message);
  
    } finally{

    }
  
})

module.exports = router;
