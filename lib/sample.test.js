
exports.tearDown = function(done) {
    console.log("done", done);
    console.log("this", this);
    console.log("arguments", arguments);
    done();
};

exports["sample test"] = function(test) {
    test.ok(false);
    test.ok(true);
    test.done();
};
