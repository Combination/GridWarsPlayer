module.exports = function (matrix) {
    var self = '11011011011111111111111111111111';

    var player = {
        response: function (point) {
            return [point, point, point, self];
        }
    };

    var around = [
        0,      1,      2,
        3,   /* i */    5,
        6,      7,      8
    ];

    var freeIndex = [];
    var selfIndex = [];
    var enemyIndex = [];

    for (var point of around) {
        if (matrix[point] === 0) {
            freeIndex.push(point);
        } else if (matrix[point] === self) {
            selfIndex.push(point);
        } else {
            enemyIndex.push(point);
        }
    }

    if (freeIndex.length === 8) {
        return player.response(5);
    }

    if (enemyIndex.length === 8) {
        return player.response(8);
    }

    if (selfIndex.length === 8) {
        return player.response(0);
    }

    if (enemyIndex.length === 0) {
        var restFree = [];

        for (var point of freeIndex) {
            if (selfIndex.indexOf(point + 4) === -1) {
                restFree.push(point);
            }
        }

        if (restFree.length) {
            return player.response(restFree[0]);
        }

        return player.response(selfIndex[0]);
    }

    var attackPoint = 1;

    if (enemyIndex.indexOf(attackPoint) > -1) {
        return player.response(attackPoint);
    }

    var restEnemy = [];

    for (var point of enemyIndex) {
        if (selfIndex.indexOf(point + 3) === -1) {
            restEnemy.push(point);
        }
    }

    if (restEnemy.length) {
        return player.response(restEnemy[0]);
    }

    if (freeIndex.length) {
        return player.response(freeIndex[0]);
    }

    return player.response(enemyIndex[0]);
};