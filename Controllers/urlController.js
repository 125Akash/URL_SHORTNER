const ShortUrl = require('../models/shortUrl');

exports.getAllUrls = async (req, res) => {
    if (req.session && req.session.userId) {
        const shortUrls = await ShortUrl.find({});
        res.render('url', { shortUrls: shortUrls });
    } else {
        res.redirect('/');
    }
};

exports.createShortUrl = async (req, res) => {
    await ShortUrl.create({ full: req.body.fullUrl });
    res.redirect('/url');
};

exports.redirectShortUrl = async (req, res) => {
    const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
    if (shortUrl == null) return res.sendStatus(404);

    shortUrl.clicks++;
    shortUrl.save();

    res.redirect(shortUrl.full);
};