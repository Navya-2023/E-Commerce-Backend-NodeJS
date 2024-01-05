const express = require('express');
const app = express();
app.use(express.json());
app.get("/",(req,res)=>{
    const{name,age}=req.query;
    res.send("Hello welcome!!");
})
app.post("/contact",(req,res)=>{
    const{name,phone,email}=req.body;

    if(!name){
        res.status(422).json({message:'name is required'});
    }
    res.status(200).json({message:`contactdetails for ${name} received as ${phone} and ${email}`})
})
const port = 3000; // Replace 3000 with your desired port number
 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});