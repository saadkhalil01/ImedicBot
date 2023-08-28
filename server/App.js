const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;

// Define the User schema and model
const Schema = mongoose.Schema;
const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});
const User = mongoose.model('User', userSchema); // Define and export the User model

// Connect to MongoDB
try {
    const mongoURI = 'mongodb://0.0.0.0:27017/saad';
    mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((err) => {
            console.error('Error connecting to MongoDB:', err);
        });
} catch (error) {
    console.log("Could not connect to MongoDB");
}

app.use(bodyParser.json());

app.post("/login", async (req, res) => {
    try{
        const{email,password} = req.body;
        const user = await User.findOne({email:email});
        if(user.password===password){
            return res.send({message:'Sign IN successfully'});
        }
        else{
            return res.status(202).json({message:'invalid credentials'});
        }
        
    }
    catch(error){
        return res.status(500).json({ error: 'Internal server error' });
    }
});

app.post("/signUp", async (req, res) => {
    try {
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser) {
            return res.send({ error: 'User already exists' });
        }

        const newUser = new User({
            email: req.body.email,
            password: req.body.password
        });

        await newUser.save();
        return res.send({ user: newUser,error:"User Created successfully" });
    } catch (error) {
        return res.status(500).json({ error: 'Internal server error' });
    }
});
    

app.get("/", (req, res) => {
    res.send("Listening on port " + port);
});

app.listen(port, () => {
    console.log("Listening on port " + port);
});
