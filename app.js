const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


app.use(express.static(path.join(__dirname, 'public')));


router.get('/', function (req, res) {
    res.render('index.html');

    //__dirname : It will resolve to your project folder.
});

app.listen(3000);
console.log('Server running on port 3000');