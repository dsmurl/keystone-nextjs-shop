var artWorkService = require('./api/artWorks');

// Export our app routes
exports = module.exports = function (app) {

    var renderHome = function (req, res) {
        // Render some simple boilerplate html
        function renderFullPage() {
            // Note the div class name here, we will use that as a hook for our React code
            // We are also adding the bundled javascript code
            return `
                <!doctype html>
                <html>
                    <head>
                        <title>Hello Keystone With React And Redux</title>
                    </head>
                    <body>
                        <div class="react-container">
                        </div>
                        <script src="bundle.js"></script>
                    </body>
                </html>
            `;
        }

        // Send the html boilerplate
        res.send(renderFullPage());
    };

    app.get('/', renderHome);
    app.get('/gallery', renderHome);
    app.get('/contact', renderHome);

    app.get('/api/art-works', artWorkService.artWorkList);
    app.get('/api/art-works/:id', artWorkService.artWorkGet);
};