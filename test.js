var test = require('tape');
var player = require('./player');

test('first test', function (t) {
    t.plan(9);

    var init = '00000000000000000000000000000000';
    var self = '11011011011111111111111111111111';
    var enemy = '00011111111111111111111111111000';

    var matrixEmpty = [
        0,      0,      0,
        0,      init,   0,
        0,      0,      0
    ];

    t.deepEqual([5, 5, 5, self], player(matrixEmpty));

    var matrixTrinity = [
        self,   0,      0,
        0,      init,   self,
        0,      self,   0
    ];

    t.deepEqual([2, 2, 2, self], player(matrixTrinity));

    var matrixSelf = [
        self, self, self,
        self, init, self,
        self, self, self
    ];

    t.deepEqual([0, 0, 0, self], player(matrixSelf));

    var matrixEnemy = [
        0,  enemy,  0,
        0,  init,   0,
        0,  0,      0
    ];

    t.deepEqual([1, 1, 1, self], player(matrixEnemy));

    var matrixRestLeftFree = [
        self,   self,   enemy,
        0,      init,   self,
        0,      0,      0
    ];

    t.deepEqual([3, 3, 3, self], player(matrixRestLeftFree));

    var matrixRestSelf = [
        self, 0,    self,
        0,    init, self,
        self, self, self
    ];

    t.deepEqual([0, 0, 0, self], player(matrixRestSelf));

    var matrixRestLeftEnemy = [
        self,   self,   enemy,
        enemy,  self,   self,
        0,      0,      0
    ];

    t.deepEqual([3, 3, 3, self], player(matrixRestLeftEnemy));

    var matrixRestBackFree = [
        self,   self,   enemy,
        enemy,  self,   self,
        self,   0,      0
    ];

    t.deepEqual([7, 7, 7, self], player(matrixRestBackFree));

    var matrixBack = [
        enemy, enemy, enemy,
        enemy, self,  enemy,
        enemy, enemy, enemy
    ];

    t.deepEqual([8, 8, 8, self], player(matrixBack));
});