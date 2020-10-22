const app = require('./index').app;

const port = process.env.PORT || 3000;
app.listen(port, function(){
    console.log(`Listening ${port} port`);
})