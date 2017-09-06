const path = require('path');
const express = require('express');
const app = express();
app.use(express.static(path.join(__dirname, '/public')));
app.get('/', function(req, res) {
    res.render('index.html');
})
module.exports = app;
if (!module.parent) {
    app.listen(process.env.PORT || 3333, () => {
        console.log('Server is listening on port 3333. Ready to accept requests!');
    })
}