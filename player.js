module.exports = function (matrix) {
    var self = '11011011011111111111111111111111';

    function respose(point) {
        return [point, point, point, self];
    }

    var around = [
        0,      1,      2,
        3,   /* i */    5,
        6,      7,      8
    ];

    var allFree = true;
    var freeIndex = [];
    var selfIndex = [];
    var enemyIndex = [];

    for (var point of around) {
        if (matrix[point] === 0) {
            freeIndex.push(point);
        } else if (matrix[point] === self) {
            allFree = false;
            selfIndex.push(point);
        } else {
            enemyIndex.push(point);
            allFree = false;
        }
    }

    if (allFree) {
        return [5, 5, 5, self];
    }

    if (enemyIndex.length === 0) {
        return freeIndex.length ? respose(freeIndex[0]) : respose(selfIndex[0]);
    }

    var attackPoint = 1;

    if (enemyIndex.indexOf(attackPoint) > -1) {
        return respose(attackPoint);
    }

    var restEnemy = [];

    for (var point of enemyIndex) {
        if (selfIndex.indexOf(point + 3) === -1) {
            restEnemy.push(point);
        }
    }

    if (restEnemy.length) {
        return respose(restEnemy[0]);
    }

    if (freeIndex.length) {
        return respose(freeIndex[0]);
    }

    return respose(enemyIndex[0]);
};