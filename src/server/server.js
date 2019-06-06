
const express = require('express');
const path = require('path');

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a short list of items
app.get('/api/getList', (req,res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);




// (async function () {
// var express = require('express');
// var app = express();
//
// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });
//
// app.listen(3001, function () {
//     console.log('Example app listening on port 3000!');
// });
// }());



// (async function () {
//     let server = new Hapi.Server();
//     let config = await getConfig();
//     // TODO: убрать после отладки
//     logger.logInfo('Initial getConfig', { config });
//
//     server.connection({
//         port: config.server.port,
//         state: {
//             strictHeader: false
//         },
//         routes: {
//             security: { xframe: true, noSniff: false }
//         }
//     });
//
//     const plugins = initPlugins(config);
//     server.register(plugins, (error) => {
//         if (error) {
//             throw error;
//         }
//
//         server.auth.strategy('default', 'remote-jwt', false, {
//             serviceUrl: config.services.jwt.corporate,
//             tokenCookie: config.auth.tokenCookie,
//             tokenParam: config.auth.tokenParam,
//             devAccess: config.auth.devAccess,
//             devAccessParam: config.auth.devAccessParam,
//             devAccessCookie: config.auth.devAccessCookie,
//             cusParam: config.auth.cusParam,
//             cusCookie: config.auth.cusCookie,
//             contextRoot: config.client.contextRoot,
//             externalSystemCode: config.externalSystemCode
//         });
//         server.auth.default('default');
//
//         server.start((error) => {
//             if (error) {
//                 console.error(`Server start failed: ${error.toString()}`);
//                 throw error;
//             }
//             // console.log(`Server is running: ${server.info.uri}...`);
//         });
//     });
// }());