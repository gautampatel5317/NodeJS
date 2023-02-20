const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;
const mainRouter = require('./routes/index');
const productRouter = require('./routes/products');
// const apiKeyMiddleware = require('./middlewares/api');
app.set('view engine', 'ejs');
// app.use(apiKeyMiddleware);
app.use(express.static('public'))
app.use(mainRouter);
app.use(productRouter);
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});