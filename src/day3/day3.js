function day3(input) {
    rucksacks = input.replaceAll('\r', '').split('\n');
    var prioritySum = 0;
    var badgeSum = 0;
    var counter = 1;
    groupArray = [];
    for (var rucksack of rucksacks) {
        //part 1
        groupArray.push(rucksack);
        var comp1 = rucksack.slice(0, (rucksack.length / 2)).split('');
        var comp2 = rucksack.slice((rucksack.length / 2), rucksack.length).split('');
        const commonItems = new Set(comp1.filter(value => comp2.includes(value)));
        prioritySum += getPriority(commonItems);
        if (counter == 3) {
            var ruck1 = groupArray[0].split('');
            var ruck2 = groupArray[1].split('');
            var ruck3 = groupArray[2].split('');
            const badge = new Set(ruck1.filter(value => ruck2.includes(value)).filter(value => ruck3.includes(value)));
            badgeSum += getPriority(badge);
            groupArray = [];
            counter = 1;
        } else {
            counter++;
        }
    }
    return {
        "partOne": prioritySum,
        "partTwo": badgeSum
    }
}

function getPriority(set) {
    var val = 0;
    for (var item of set) {
        val += parseInt(
            item === item.toUpperCase() ?
                item.replace(/[a-zA-Z]/g, m => m.charCodeAt() - 38) :
                item.replace(/[a-zA-Z]/g, m => m.charCodeAt() - 96)
        );
    }
    return val;
}

module.exports = {
    day3,
    // Note: you can add helper functions for testing within .test.js here if you wish
};
