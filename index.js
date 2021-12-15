const express= require('express');
const morgan = require('morgan');
const users = require('./data/users');

const port=process.env.PORT ||5000;

const app = express();
app.use(express.json());

app.use(morgan("dev"));

app.get("/", function(req, res) {
    res.send("Osman Ali")
});
app.get("/users", (req, res)=> {
    res.status(202).json({
        status:"success",
        data:users,
    })
})
app.post("/users", (req, res)=> {
    const {fname,lname,dob,school} =req.body;
    const user ={fname,lname,dob,school};
    users.push(user);
    res.status(202).json({
        message:"user has been created",
        data:user,
    })
})

app.listen(port,()=>console.log(`listening on port${port}`));