const express =require('express');
const mongoose =require('mongoose');
const app= new express();
const cors =require('cors');
const path=require('path')



// Security Middleware Implement
app.use(cors())
app.use(express.json())




// Mongo DB Database Connection
let URI="mongodb+srv://<username>:<password>@cluster0.4mjyxmf.mongodb.net/demo";
let OPTION={user:'sir',pass:'sir',autoIndex:true}
mongoose.connect(URI,OPTION)
.then(() => {
    console.log('Mongoose connected successfully');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.toString());
  });


// Routing Implement
// app.use("/",router)
const data= [
    {
      "name": "Example School 1",
      "location": "City A",
      "founded_year": 1995,
      "student_count": 1200,
      "teachers": 80
    },
    {
      "name": "Sample Academy",
      "location": "Town B",
      "founded_year": 2008,
      "student_count": 800,
      "teachers": 50
    },
    {
      "name": "Education Center X",
      "location": "Village C",
      "founded_year": 1980,
      "student_count": 1500,
      "teachers": 90
    },
    {
      "name": "Learning High",
      "location": "City D",
      "founded_year": 2010,
      "student_count": 600,
      "teachers": 40
    },
    {
      "name": "Scholar's Institute",
      "location": "Town E",
      "founded_year": 1992,
      "student_count": 1000,
      "teachers": 70
    },
    {
      "name": "Academic Heights",
      "location": "City F",
      "founded_year": 2005,
      "student_count": 1300,
      "teachers": 85
    },
    {
      "name": "Visionary School",
      "location": "Town G",
      "founded_year": 1985,
      "student_count": 700,
      "teachers": 55
    },
    {
      "name": "Innovation Academy",
      "location": "City H",
      "founded_year": 2015,
      "student_count": 900,
      "teachers": 60
    },
    {
      "name": "Future Minds School",
      "location": "Village I",
      "founded_year": 2000,
      "student_count": 1100,
      "teachers": 75
    },
    {
      "name": "Pioneer Education Center",
      "location": "City J",
      "founded_year": 1998,
      "student_count": 850,
      "teachers": 65
    }
  ]
app.get('/api/home',async(req,res)=>{
    try{
        res.status(200).json({status:"success" ,data:data})
    }catch(err){
        res.status(200).json({status:"fail" ,data:err.toString()})
    }
})



// Front-end route difine and connect
app.use("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname, 'client','dist','index.html'))
})



module.exports=app;
