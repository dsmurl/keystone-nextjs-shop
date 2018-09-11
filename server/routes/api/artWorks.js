var keystone = require('keystone');
var ArtWork = keystone.list('ArtWork');

/**
 * List People
 */
exports.artWorkList = function(req, res) {
    ArtWork.model.find(function(err, items) {

        if (err) return res.json({ err: err });

        res.json(items);
    });
};

/**
 * Get People by ID
 */
exports.artWorkGet = function(req, res) {
    ArtWork.model.findById(req.params.id).exec(function(err, item) {

        if (err) return res.json({ err: err });
        if (!item) return res.json('not found');

        res.json(item);
    });
};
