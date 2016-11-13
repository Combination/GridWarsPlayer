var test = require('tape');
var player = require('./player');

test('first test', function (t) {
    t.plan(3);

    var self = '11011011011111111111111111111111';
    var enemy = '00011111111111111111111111111000';

    var matrixEmpty = [
        0, 0, 0,
        0, 0, 0,
        0, 0, 0
    ];

    t.deepEqual([5, 5, 5, self], player(matrixEmpty));

    var matrixSelf = [
        self, self, self,
        self, self, self,
        self, self, self
    ];

    t.deepEqual([0, 0, 0, self], player(matrixSelf));

    var matrixEnemy = [
        0, 0, 0,
        0, 0, 0,
        0, 0, enemy
    ];

    t.deepEqual([8, 8, 8, self], player(matrixEnemy));
});