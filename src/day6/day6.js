function day6(input) {
    var index = 0;
    var resultObj = {
        partOne: null,
        partTwo: null
    };
    while (resultObj.partOne == null || resultObj.partTwo == null) {
        if (resultObj.partOne == null) {
            resultObj.partOne = checkSubstring(input, index, 4, 'data');
        }
        if (resultObj.partTwo == null) {
            resultObj.partTwo = checkSubstring(input, index, 14, 'message');
        }
        index++;
        if (index == input.length) break;
    }
    return resultObj;
}

function checkSubstring(string, index, buffer, type) {
    var subStr = string.slice(index, index + buffer);
    var subStrSet = new Set(subStr.split(''));
    return subStrSet.size == buffer ? `${type} starts at index ${index + buffer}` : null;
}

module.exports = {
    day6,
    // Note: you can add helper functions for testing within .test.js here if you wish
};

