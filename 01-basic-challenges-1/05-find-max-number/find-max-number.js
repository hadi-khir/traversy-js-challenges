function findMaxNumber(arr) {

    let currentMax = Number.MIN_SAFE_INTEGER;

    arr.forEach((number) => {

        if (number > currentMax) {
            currentMax = number;
        }
    })

    return currentMax;
}

module.exports = findMaxNumber;
