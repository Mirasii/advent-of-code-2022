const { day7 } = require("./day7");

let input = `$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`;

test("day7", () => {
    const result = day7(input);
    expect(result.partOne).toBe(95437);
    expect(result.partTwo).toBe(`/d frees up enough space with an excess of 16552477 (total freed: 24933642)`);
});