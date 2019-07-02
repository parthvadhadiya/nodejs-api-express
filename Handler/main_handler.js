const TestBugger = require('test-bugger');
const testBugger = new TestBugger({fileName: __filename});

MainHandler.prototype.alive = function (req, res) {
    testBugger.informLog("Rest API...! alive ok");
    res.send(true)
};


MainHandler.prototype.post_req = function (req, res) {
    try {
        testBugger.informLog(`Request -> ${req.body}`);
    } catch (e) {
        testBugger.errorLog('Error in request');
        testBugger.errorLog(e)
    }
    // process your post request here.
    // return res
    let response = {"name": "alen", "age": 25};
    res.json(response)
};

MainHandler.prototype.post_pic = function (req, res) {
    console.log("in")
    console.log(req.files)

    let sampleFile = req.files.sampleFile;
    sampleFile.mv('file_tmp/filename.jpg', function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded!');

    });
}

MainHandler.prototype.get_pic = function (req, res) {
    // console.log(__dirname)
    const file = `${__dirname}/upload-filetmp/test.png`;
    res.download(file); // Set disposition and send it.
};

function MainHandler() {
}

module.exports = MainHandler;