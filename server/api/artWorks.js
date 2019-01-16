var keystone = require('keystone');
var ArtWork = keystone.list('ArtWork');
var Image = keystone.list('Image');
var User = keystone.list('User');

/**
 *
 *  Service Utilities
 *
 **/

const getFullArtWorks = (images, artWorks, users) => {
    const imagesIndexedObject = arrayToObject(images);
    const usersIndexedObject = arrayToObject(users);

    return artWorks.map((artWork) => {
            artWork.artist = usersIndexedObject[artWork.artist];
            artWork.images = artWork.images.map((image) => (imagesIndexedObject[image]));

            artWork.artist.password = undefined;
            artWork.artist.email = undefined;
            artWork.artist.canAccessKeystone = undefined;

            return artWork;
        }
    );
};

const arrayToObject = (passedArray) => {
    const newObject = {};
    passedArray.forEach(function(item) {
        newObject[item._id] = item;
    });

    return newObject;
};



/**
 *
 * Get All ArtWorks
 *
 */
exports.artWorkList = async function(req, res) {

    var data = [];
    try {
        data = await Promise.all([Image.model.find(), ArtWork.model.find(), User.model.find()]);
    } catch (err) {
        console.error('Http error', err);
        return res.status(500).send();
    }

    const images = data[0];
    const artWorks = data[1];
    const users = data[2];

    res.json(getFullArtWorks(images, artWorks, users));
};

/**
 *
 * Get Artwork by ID
 *
 */
exports.artWorkGet = function(req, res) {
    ArtWork.model.findById(req.params.id).exec(function(err, item) {

        if (err) return res.json({ err: err });
        if (!item) return res.json('not found');

        res.json(item);
    });
};
