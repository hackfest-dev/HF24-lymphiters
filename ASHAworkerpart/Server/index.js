const express = require('express');
const port = 3000;
const app = express();
const bodyParser = require('body-parser');

require('./db');
require('./models/User');

const authRouter=require('./routes/authRouter');
const requireToken=require('./middleware/AuthTokenRequired')
app.use(bodyParser.json());
app.use(authRouter)

app.get('/',requireToken, (req, res) => {
    res.send('This is home page');
});

/*app.post('/Register',(req,res)=>{
    res.send('This is Register page')
})*/

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
