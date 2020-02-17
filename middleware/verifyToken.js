module.exports = function verifyToken(req, res, next) {

    const token = req.headers.cookie.split('=')[1];

    if (!token) {
        return res.json({ error: 'No Credentials Provided.' })
    }

    next();
}