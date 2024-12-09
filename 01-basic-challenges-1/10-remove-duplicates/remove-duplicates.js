function removeDuplicates(arr) {

    let updated = [];

    arr.forEach(item => {

        if (!updated.includes(item)) {
            updated.push(item);
        }
    })

    return updated;
}

module.exports = removeDuplicates;
