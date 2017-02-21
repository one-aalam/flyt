var flyt = require('./flyt.js');

var out = function() {
    process.stdout.write('\nRunning [[1, 2, [3]], 4] through flatten yields -> [' + flyt.flatten([[1, 2, [3]], 4]) + ']\n');
};
out();