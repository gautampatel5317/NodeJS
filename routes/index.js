const router = require('express').Router();
const apiKeyMiddleware = require('../middlewares/api');
// router.use(apiKeyMiddleware);
router.get("/", (req, res) => {
    res.render('index', {
        title: 'Home Page'
    });
})
router.get("/about", (req, res) => {
    res.render('about');
})
router.get('/download', (req, res) => {
    res.download(path.resolve(__dirname) + '/about.html');
})
// router.get('/api/products', apiKeyMiddleware, (req, res) => {
//     res.json([{
//         id: '123',
//         name: 'chrome'
//     }, {
//         id: '1234',
//         name: 'Firefox'
//     }])
// })
module.exports = router;