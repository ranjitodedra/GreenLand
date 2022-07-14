// Import All Dependencies
const dotenv = require('dotenv');
const express = require('express');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const cors = require("cors");
const app = express();

// Configure ENV File & Require Connection File
dotenv.config({path : './config.env'});
const dbo = require("./db/conn");
require('./db/conn');
const port = process.env.PORT || 3001;

// Require Model
const Users = require('./models/userSchema');
const Message = require('./models/msgSchema');
const Houses = require('./models/houseSchema');
const Rents = require('./models/rentSchema');
const authenticate = require('./middleware/authentication');



// These Method is Used to Get Data and Cookies from FrontEnd
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
app.use(cors());
app.use(require("./routes/record"));
app.get('/', (req, res)=>{
    res.send("Hello World");
})

// Registration
app.post('/register', async (req, res)=>{
    try {
        // Get body or Data
        const username = req.body.username;
        const email = req.body.email;
        const password = req.body.password;

        const createUser = new Users({
            username : username,
            email : email,
            password : password
        });

        const created = await createUser.save();
        console.log(created);
        res.status(200).send("Registered");

    } catch (error) {
        res.status(400).send(error)
    }
})

//Message
app.post('/message', async (req, res)=>{
    try {
        // Get body or Data
        const name = req.body.name;
        const email = req.body.email;
        const message = req.body.message;

        const sendMsg = new Message({
            name : name,
            email : email,
            message : message
        });

        // But Before Saving or Inserting, Password will Hash 
        const created = await sendMsg.save();
        console.log(created);
        res.status(200).send("Sent");

    } catch (error) {
        res.status(400).send(error)
    }
})

//Login 
app.post('/login', async (req, res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;

        //Find User if Exist
        const user = await Users.findOne({email:email});
        if(user){
            //verify password
            const isMatch = await bcryptjs.compare(password, user.password);

            if(isMatch){
                //generate Token Which is Define in User Schema
                const token = await user.generateToken();
                res.cookie("jwt",token,{
                    expires : new Date(Date.now() + 86400000),
                    httpOnly : true
                })
                res.status(200).send("LoggedIn")
            }
            else{
                res.status(400).send("Invalid Credentials");
            }
        }
        else{
            res.status(400).send("Invalid Credentials");
        }
    }catch(error){
        res.status(400).send(error);
    }
})

app.get("/buy",(req,res)=>{
    Houses.find({})
    .then((items)=>res.json(items))
    .catch((err)=>console.log(err));

});
app.get("/rent",(req,res)=>{
    Rents.find({})
    .then((items)=>res.json(items))
    .catch((err)=>console.log(err));

});

// Logout Page
app.get('/logout', (req, res)=>{
    res.clearCookie("jwt", {path : '/'})
    res.status(200).send("User Logged Out")
})

//Authentication
app.get('/auth', authenticate, (req, res)=>{

})

// Run Server 
app.listen(port, ()=>{
    dbo.connectToServer(function (err) {
        if (err) console.error(err);
     
      });
    console.log("Server is Listening");
})