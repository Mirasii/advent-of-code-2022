function day7(input) {

    var structureObj = buildStructureObject(input);
    console.log(structureObj);
    // part 1
    var totalDiskVolume = 0;
    for (var key of Object.keys(structureObj)){
        var level = structureObj[key];
        for (var dirKey of Object.keys(level)) {
            var directory = level[dirKey]
            if (directory.totalFileSize <= 100000) {
                totalDiskVolume += directory.totalFileSize;
            }
        }
    }
    return {
        "partOne":totalDiskVolume,
        "partTwo":null
    }
}

function buildStructureObject(input) {
    var consoleLines = input.replaceAll('\r', '').split('\n');
    var parentDir = null;
    var level = 0;
    var structureObj = {
        "deepestLevel":0
    };
    var currentObj = {};
    for (var line of consoleLines) {
        if (line.includes('$')) {
            if (line.includes('cd')) {
                if (line.includes('..')) {
                    structureObj[level][currentObj.name] = currentObj;
                    level--;
                    var sizeToAdd = currentObj.totalFileSize;
                    currentObj = structureObj[level][parentDir];
                    currentObj.totalFileSize += sizeToAdd;
                    parentDir = currentObj.parent;
                } else {
                    level++;
                    parentDir = currentObj.name;
                    if (level >= structureObj.deepestLevel){
                        structureObj.deepestLevel = level;
                        structureObj[level] = {};
                    } 
                    currentObj = {
                        "name" : line.split(' ')[2],
                        "parent" : parentDir,
                        "files" : [],
                        "totalFileSize" : 0
                    }
                    structureObj[level][currentObj.name] = currentObj;
                }
            }
        } else if (!line.includes('dir')) {
            currentObj.files.push(line);
            currentObj.totalFileSize += parseInt(line.split(' ')[0]);
        }
    }
    structureObj[level][currentObj.name] = currentObj;
    return structureObj;
}



module.exports = {
    day7,
};

