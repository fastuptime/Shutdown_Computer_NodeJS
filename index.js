var exec = require('child_process').exec;
var child = exec('shutdown -s -t 0', function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
        console.log('exec error: ' + error);
    }
});

setTimeout(function () {
    child.stdout.on('data', function(data) {
        console.log(data);
    });
}, 120000);