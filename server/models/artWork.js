var keystone = require('keystone');
var Types = keystone.Field.Types;
var path = require('path');

// Create a new Keystone list called ArtWork
var ArtWork = new keystone.List('ArtWork', {
    autokey: {path: 'slug', from: 'name', unique: true},
    defaultSort: '-createdAt',
});

// // Adding the option to add an image to our Recipe from
// var artWorkImgStorage = new keystone.Storage({
//     adapter: keystone.Storage.Adapters.FS,
//     fs: {
//         // required; path where the files should be stored
//         path: keystone.expandPath('server/public/img'),
//         generateFilename: function (file, index) {
//             return file.originalname;
//         },
//         whenExists: 'error',
//         // path where files will be served
//         publicPath: '/public/img',
//     },
// });

// Fields for ArtWork
ArtWork.add({
    name: {
        type: String,
        required: true
    },
    ebayAdLink: {
        type: String,
        required: false
    },
    adState: {
        type: Types.Select,
        options: 'DRAFT, PUBLISHED, ARCHIVED',
        default: 'DRAFT'
    },
    saleState: {
        type: Types.Select,
        options: 'NOT_FOR_SALE, FOR_SALE, SOLD',
        default: 'FOR_SALE'
    },
    artist: {
        type: Types.Relationship,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    publishedAt: Date,
    archivedAt: Date,
    images : {
        type: Types.Relationship,
        ref: 'Image',
        many: true
    },
    // image: {
    //     type: Types.File,
    //     storage: ArtWorkImgStorage,
    //     mimetype: '.jpeg, .jpg, .gif, .svg',
    // },
    description: {
        type: Types.Html,
        wysiwyg: true,
        height: 150
    },
});

// Setting the default order of the columns on the admin tab
ArtWork.defaultColumns = 'name, ebayAdLink, adState|20%, saleState|20%, artist, publishedAt|15%';
ArtWork.register();