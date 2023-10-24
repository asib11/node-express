const express = require('express');
const tShirt = require('./TShirt.json');
const app = express();
const port = 5000;

app.get('/',(request, response)=>{
    response.send('yes, i am on')
});

app.get('/tshirt', (req, res)=>{
    res.send(tShirt);
})
app.get('/tshirt/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    console.log(id)
    const shirt = tShirt.find(shirt => shirt.id === id) || {};
    res.send(shirt)
})



app.listen(port, ()=>{
    console.log('khela hbe', port)
})