
const express = require('express');
const routes = express.Router();

const {sendMessage, getMessages} = require("../controllers/chatCont");

const authenticated = require('../middlewares/verifyToken');

routes.post("/send/:id",authenticated , sendMessage);

routes.get("/getmsg/:id" , authenticated , getMessages);


module.exports = routes;