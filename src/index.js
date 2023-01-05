
function ascSort(a, b) {
    return a - b;
}

function descSort(a, b) {
    return b - a;
}

function SortAnArray(arr) {
    let newArr = [];
    arr.forEach((item, index) => {
        newArr.push(item.sort(index % 2 ? descSort : ascSort));
    });
    return newArr;
}

module.exports = function towelSort (matrix) {
    if(arguments[0]=== undefined) return [];
    if(!matrix.length) return [];

    return SortAnArray(matrix).flat();
}
