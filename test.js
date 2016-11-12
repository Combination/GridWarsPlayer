var test = require('tape');
var player = require('./player');

test('first test', function (t) {
    t.plan(1);

    var matrix = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];

    var self = '11011011011111111111111111111111';

    t.deepEqual([5, 5, 5, self], player(matrix));
});