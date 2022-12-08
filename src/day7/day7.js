function day7(input) {

    var directories = buildStructureObject(input);
    var closestDir = '';
    var closestDirDeviation = 30000000;
    var neededSpace = 30000000;
    var usedSpace = directories['/'].files.reduce(( total, file) => total + file.size, 0) + getChildSizes(directories, directories['/'], '/');
    var freeSpace = 70000000 - usedSpace;
    var spaceGiven = 0;
    // part 1
    var totalDiskVolume = 0;
    for (var key of Object.keys(directories)){
        var directory = directories[key];
        var dirSize = directory.files.reduce(( total, file) => total + file.size, 0) + getChildSizes(directories, directory, key);
        // part 1
        if (dirSize <=100000) {
            totalDiskVolume += dirSize;
        }
        // part 2
        var differential = -(neededSpace - freeSpace - dirSize)
        if (differential > 0 && differential < closestDirDeviation) {
            closestDirDeviation = differential;
            closestDir = key;
            spaceGiven = dirSize;
        }
    }

    return {
        "partOne":totalDiskVolume,
        "partTwo": `${closestDir} frees up enough space with an excess of ${closestDirDeviation} (total freed: ${spaceGiven})`
    }
}

function buildStructureObject(input) {
    var directories = { '/': { parent: '', files: [], directories: [] } };

    var currentDirectory = '';
    input.split('\n').forEach(line => {
        var tokens = line.split(' ');
        if (line.startsWith('$')) {
            if (tokens[1] == 'cd') {
                if (tokens[2] == '/') {
                    currentDirectory = '/';
                } else if (tokens[2] == '..') {
                    var paths = currentDirectory.split('/');
                    currentDirectory = paths.slice(0, paths.length - 1).join('/');
                } else {
                    currentDirectory = (currentDirectory == '/' ? currentDirectory : currentDirectory + '/') + tokens[2];
                }
            }
        } else {
            if (tokens[0] == 'dir') {
                var newDirectory = (currentDirectory == '/' ? currentDirectory : currentDirectory + '/') + tokens[1];
                directories[newDirectory] = {
                    parent: currentDirectory,
                    files: [],
                    directories: []
                }

                directories[currentDirectory].directories.push(newDirectory);
            } else {
                directories[currentDirectory].files.push({ file: tokens[1], size: parseInt(tokens[0]) });
            }
        }
    });
    return directories;
}

function getChildSizes(directories, currDir, currKey) {
    var childSize = 0;
    for (var child of currDir.directories) {
        var childDir = directories[child];
        if (childDir.files) childSize += childDir.files.reduce((total, file) => total + file.size, 0);
        childSize += getChildSizes(directories, childDir, child);
    }
    return childSize;
}

module.exports = {
    day7,
};

