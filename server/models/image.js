var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');
var utils = require('../utils/utils');

// Create a new Keystone list called Recipe
var Image = new keystone.List('Image', {
    autokey: {path: 'slug', from: 'name', unique: true},
    defaultSort: '-createdAt',
});


// Adding the option to add an image to our Recipe from
var recipeImgStorage = new keystone.Storage({
    adapter: keystone.Storage.Adapters.FS,
    fs: {
        // required; path where the files should be stored
        path: keystone.expandPath('server/public/images'),
        generateFilename: function (file, index) {
            console.log('file: ', file);
            return utils.makeUniqueFileName(file.originalname);
        },
        whenExists: 'error',
        // path where files will be served
        publicPath: '/public/img',
    },
});

// Fields for Images
Image.add({
    name: {
        type: String,
        required: true
    },
    image: {
        type: Types.File,
        storage: recipeImgStorage,
        mimetype: '.jpeg, .jpg, .gif, .svg',
    },
    caption: {
        type: Types.Html,
        wysiwyg: true,
        height: 150
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
});

// Setting the default order of the columns on the admin tab
Image.defaultColumns = 'name, createdAt|15%';
Image.register();
