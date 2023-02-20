function apikey(req, res, next) {
    const api_key = '1234567';
    const userApiKey = req.query.api_key;
    console.log(req.query.api_key);
    if (userApiKey && (api_key === userApiKey)) {
        next();
    } else {
        return res.json({
            Message: 'Not allowed!'
        });
    }

}

module.exports = apikey;