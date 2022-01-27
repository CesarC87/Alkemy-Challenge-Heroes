import  express  from 'express';
import fetch from 'node-fetch'
import dotenv from 'dotenv'
dotenv.config()
let app = express();
const PORT = process.env.PORT;
const API_KEY = process.env.API_KEY;

app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*");
    next();
})

app.listen(PORT, (req,res) => {
    console.log(`escuchando desde ${PORT}`)
})

app.get("/search/:name", async (req, res) => {
    let name = req.params['name'];
    const url = `https://superheroapi.com/api/${API_KEY}/search/${name}`;
    const options = {
        "method": "GET"
    }
    const fetch_response = await fetch(url,options)
    .then(res => res.json())
    .catch(e => {
        console.error({
            "message": "Ocurrio un error",
            error: e
        });
    });
    console.log(fetch_response)
    res.json(fetch_response)
})
app.get("/:id", async (req, res) => {
    let id = req.params['id']
    const url = `https://superheroapi.com/api/${API_KEY}/${id}`;
    const options = {
        "method": "GET"
    }
    const fetch_response = await fetch(url,options)
    .then(res => res.json())
    .catch(e => {
        console.error({
            "message": "Ocurrio un error",
            error: e
        });
    });
    console.log(fetch_response)
    res.json(fetch_response)
})
