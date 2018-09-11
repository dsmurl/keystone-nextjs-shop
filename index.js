//import keystone
var keystone = require('keystone');

// Set up our keystone instance
keystone.init({
    // The name of the KeystoneJS application
    'name': 'Glass Shop',
    // Paths to our application static files
    'static': [
        './server/public/js/',
        './server/public/img/',
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

// Routes
keystone.set('routes', require('./server/routes'));

// Start Keystone
keystone.start();