var test = require('tape');
var player = require('./player');

test('first test', function (t) {
    t.plan(4);

    var self = '11011011011111111111111111111111';
    var enemy = '00011111111111111111111111111000';

    var matrixEmpty = [
        0, 0, 0,
        0, 1, 0,
        0, 0, 0
    ];

    t.deepEqual([5, 5, 5, self], player(matrixEmpty));

    var matrixSelf = [
        self, self, self,
        self, 1,    self,
        self, self, self
    ];

    t.deepEqual([0, 0, 0, self], player(matrixSelf));

    var matrixEnemy = [
        0,  enemy,  0,
        0,  1,      0,
        0,  0,      0
    ];

    t.deepEqual([1, 1, 1, self], player(matrixEnemy));

    var matrixEnemyRest = [
        self,   self,   enemy,
        0,      1,      self,
        0,      0,      0
    ];

    t.deepEqual([3, 3, 3, self], player(matrixEnemyRest));
});