const parts = require('./day6.json');

function day6(input) {
    var index = 0;
    var keys = Object.keys(parts);
    var resultObj = keys.reduce((o, k) => { o[k] = null; return o; }, {});
    while (Object.values(resultObj).some(element => element === null)) {
        for (var key of keys) {
            if (resultObj[key] === null) {
                resultObj[key] = checkSubstring(input, index, parts[key].indicator, parts[key].type);
            }
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
};

