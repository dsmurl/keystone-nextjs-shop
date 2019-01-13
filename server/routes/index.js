/**
 * This file is where you define your application routes and controllers.
 *
 * Start by including the middleware you want to run for every request;
 * you can attach middleware to the pre('routes') and pre('render') events.
 *
 * For simplicity, the default setup for route controllers is for each to be
 * in its own file, and we import all the files in the /routes/views directory.
 *
 * Each of these files is a route controller, and is responsible for all the
 * processing that needs to happen for the route (e.g. loading data, handling
 * form submissions, rendering the view template, etc).
 *
 * Bind each route pattern your application should respond to in the function
 * that is exported from this module, following the examples below.
 *
 * See the Express application routing documentation for more information:
 * http://expressjs.com/api.html#app.VERB
 */

// const keystone = require('keystone');
//
// // Setup Route Bindings
// exports = module.exports = nextApp => keystoneApp => {
//
//     // Next request handler
//     const handle = nextApp.getRequestHandler();
//
//     keystoneApp.get('/api/posts', (req, res, next) => {
//         const Post = keystone.list('Post');
//         Post.model
//             .find()
//             .where('state', 'published')
//             .sort('-publishedDate')
//             .exec(function (err, results) {
//                 if (err) throw err;
//                 res.json(results);
//             });
//     });
//
//     keystoneApp.get('*', (req, res) => {
//         return handle(req, res);
//     });
// };




var artWorkService = require('../api/artWorks');

// Export our app routes
exports = module.exports = (nextApp) => (keystoneApp) => {

    // var renderHome = function (req, res) {
    //     // Render some simple boilerplate html
    //     function renderFullPage() {
    //         // Note the div class name here, we will use that as a hook for our React code
    //         // We are also adding the bundled javascript code
    //         return `
    //             <!doctype html>
    //             <html>
    //                 <head>
    //                     <title>Hello Keystone With React And Redux</title>
    //                 </head>
    //                 <body>
    //                     <div class="react-container">
    //                     </div>
    //                     <script src="bundle.js"></script>
    //                 </body>
    //             </html>
    //         `;
    //     }
    //
    //     // Send the html boilerplate
    //     res.send(renderFullPage());
    // };
    //
    // keystoneApp.get('/', renderHome);
    // keystoneApp.get('/gallery', renderHome);
    // keystoneApp.get('/contact', renderHome);

    keystoneApp.get('/api/art-works', artWorkService.artWorkList);
    keystoneApp.get('/api/art-works/:id', artWorkService.artWorkGet);






    // Next request handler
    const handle = nextApp.getRequestHandler();

    keystoneApp.get('*', (req, res) => {
        return handle(req, res);
    });


};
