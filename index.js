
import express from "express";
import axios from "axios";

const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/" , async (req,res) => {
    try{
        const result  = await axios.get("https://secrets-api.appbrewery.com/random");
        res.render("index.ejs" , {
            secret : result.data.secret,
            user : result.data.username,
        });
    }catch(error) { 
        res.render("index.ejs" , { secret : error.response.data , user: "user not found"});
    }
});

app.listen(PORT , (req,res) => {
    console.log(`server running on ${PORT}`);
});