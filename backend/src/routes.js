const express = require('express');
const PostController = require('./controllers/PostController');
const LiketController = require('./controllers/LikeController');
const multer = require('multer');
const uploadConfig =  require('./config/upload');

const routes = new express.Router();
const upload = multer(uploadConfig);

routes.post('/posts', upload.single('image'), PostController.store);
routes.get('/posts', PostController.index);

routes.post('/posts/:id/like', LiketController.store);

module.exports = routes;