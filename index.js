// Simulate config options from your production environment by
// customising the .env file in your project's root folder.
require('dotenv').config();
const keystone = require('keystone');
const next = require('next');

// Make a NextJs instance
const dev = process.env.NODE_ENV !== 'production';
const app = next({
    dev,
    dir: "./client-nextjs"
});

// Initialise Keystone with your project's configuration.
// See http://keystonejs.com/guide/config for available options
// and documentation.
keystone.init({
    'brand': 'Keystone NextJs Art Shop',
    'session': true,

    // The name of the KeystoneJS application
    'name': 'Hill Country Ornate Shop',
    // Paths to our application static files
    'static': [
        './server/public/',
    ],
    // Keystone includes an updates framework,
    // which you can enable by setting the auto update option to true.
    // Updates provide an easy way to seed your database,
    // transition data when your models change,
    // or run transformation scripts against your database.
    'auto update': true,
    // The url for your MongoDB connection
    // 'mongo': 'mongodb://localhost/glass-shop-cms',
    'mongo': 'mongodb://glassshop_cms_worker:worker_pass@localhost:27017/glassshop_cms_db',
    // Whether to enable built-in authentication for Keystone's Admin UI,
    'auth': true,
    // The key of the Keystone List for users, required if auth is set to true
    'user model': 'User',
    // The encryption key to use for your cookies.
    'cookie secret': '6D61822FBE234f3f2fA52241FEC3',
});

// Load your project's Models
keystone.import('./server/models');

// Start Next app
app.prepare()
    .then(() => {
        // Load your project's Routes
        keystone.set('routes', require('./server/routes')(app));

        // Configure the navigation bar in Keystone's Admin UI
        keystone.set('nav', {
            posts: ['ArtWork', 'Image'],
            users: 'User',
        });

        keystone.start();
    });
