import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

import randomName from '@scaleway/random-name';


app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/name", (req, res)=>{
    // Logic to generate band name would go here
    var bandName = randomName();
    res.render("index", {bandName: bandName});
});

app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
});