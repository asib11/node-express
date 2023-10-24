const express = require('express');
const app = express();
const port = 5000;

app.get('/',(request, response)=>{
    response.send('yes, i am on')
});

app.listen(port, ()=>{
    console.log('khela hbe', port)
})