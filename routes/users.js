var express = require('express');
var router = express.Router();
var mt = require('multiparty');
var fs = require('fs');

router.post('/', function (req, resp, next) {
    req.setTimeout(0);
    var form = new mt.Form();
    form.parse(req, function (err, res, files) {
        console.log(err);
        console.log(res);
        console.log(files);
        files.file.forEach(function (item) {
            var data = fs.readFileSync(item.path);
            fs.writeFileSync(__dirname + "/" + item.originalFilename, data);
            resp.send('respond with a resource');

        });

    });

});

module.exports = router;
