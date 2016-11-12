var test = require('tape');
var player = require('./player');

test('first test', function (t) {
    t.plan(1);

    t.deepEqual([5, 5, 5], player([]));
});