module.exports = function (matrix) {
    var self = '11011011011111111111111111111111';

    var around = [
        0,      1,      2,
        3,   /* i */    5,
        6,      7,      8
    ];

    var allFree = true;
    var freeIndex = [];
    var selfIndex = [];
    var enemyIndex = [];

    for (var index of around) {
        if (matrix[index] === 0) {
            freeIndex.push(index);
        } else if (matrix[index] === self) {
            allFree = false;
            selfIndex.push(index);
        } else {
            enemyIndex.push(index);
            allFree = false;
        }
    }

    if (allFree) {
        return [5, 5, 5, self];
    }

    if (enemyIndex.length === 0) {
        if (freeIndex.length) {
            var point = freeIndex[0];

            return [point, point, point, self];
        }

        var point = selfIndex[0];

        return [point, point, point, self];
    }

    var point = enemyIndex[0];

    return [point, point, point, self];
};