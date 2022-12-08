function day7(input) {

    var structureObj = buildStructureObject(input);
    // part 1
    var totalDiskVolume = 0;
    for (var key of Object.keys(structureObj)){
        var level = structureObj[key];
        for (var dirKey of Object.keys(level)) {
            var directory = level[dirKey]
            //console.log(`${directory.name} has a file size of ${directory.totalFileSize}`)
            if (directory.totalFileSize <= 100000) {
                //console.log(`${directory.name} meets criteria`)
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
    //parse text to get file sizes
    for (var line of consoleLines) {
        if (line.includes('$')) {
            if (line.includes('cd')) {
                //go up one level = write this object and carry size to parent
                if (line.includes('..')) {
                    structureObj[level][currentObj.name] = currentObj;
                    level--;
                    var sizeToAdd = currentObj.totalFileSize;
                    currentObj = structureObj[level][parentDir];
                    currentObj.totalFileSize += sizeToAdd;
                    parentDir = currentObj.parent;
                //create child in next level
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
    //exit out to top level to correct file sizes
    for (level; level > 1; level--) {
        structureObj[level][currentObj.name] = currentObj;
        var sizeToAdd = currentObj.totalFileSize;
        currentObj = structureObj[level-1][parentDir];
        currentObj.totalFileSize += sizeToAdd;
        parentDir = currentObj.parent;
    }
    //add final obj
    structureObj[level][currentObj.name] = currentObj;
    return structureObj;
}



module.exports = {
    day7,
};

