const express = require('express');
const fs=require('fs')
const app = express();
app.use(express.static("public"));

app.get('/', (req, res) => {
    let dir=__dirname;
    let newdir=dir.substring(0,33);
    res.sendFile(newdir + '/my-app/public/index.html');
})

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`)
})