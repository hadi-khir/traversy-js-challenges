function countOccurrences(string, character) {

    let count = 0;

    for (let i = 0; i < string.length; i++) {

        if (string[i] === character) {
            count += 1;
        }
    }

    return count;
}


const countAnotherWay = (string, character) => {

    return string.split(character).length - 1;
}

module.exports = countOccurrences;
