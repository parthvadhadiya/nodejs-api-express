'use strict'

const express = require('express')
const fileUpload = require('express-fileupload');
const app = express()

// default options
app.use(fileUpload());

const projectConfig = require('./config/project.config')

const router = require('./router')

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded(
    {extended: true}
));
app.use(bodyParser.json());


app.use("/rest_api",router);

app.listen(projectConfig.servicePort, ()=>{
    console.log(`Server Listen on ${projectConfig.servicePort} ...`)
})