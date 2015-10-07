  function fizzBuzzin(text) {
    var lines = text.split("\n");
    console.log(lines);
    var fizzSegments = [];
    var fizzAndBuzz = [];
    for (index = 0; index < lines.length; index ++){
        console.log("line #" + index + " : " + lines[index].split(" "));
        fizzSegments.push(lines[index].split(" "));
    };
    console.log("fizzSegments: ");
    console.log(fizzSegments);
    for (i = 0; i < fizzSegments.length; i ++){
        var translatedLine = [];
        console.log(currentSegment);
        var currentSegment = fizzSegments[i];
        var x = currentSegment[0];
        var y = currentSegment[1];
        var n = currentSegment[2];

        for (j = 1; j <= n ; j++){
            if (j % x === 0 && j % y === 0){
                translatedLine.push("FB")
            }
            else if (j % y === 0){
                translatedLine.push("B")
            }
            else if (j % x === 0){
                translatedLine.push("F")
            }
            else {
                translatedLine.push(j)
            }
        }
        fizzAndBuzz.push(translatedLine.join(" "));
    }
    return fizzAndBuzz.join("\n");
    }

console.log(fizzBuzzin("19 20 34
11 18 91
7 1 50
15 1 95
15 4 96
18 10 94
20 6 34
1 3 53
9 18 97
17 17 70
19 17 42
16 15 65
6 15 86
17 7 24
12 10 38
7 8 30
4 17 96
3 5 28
15 4 74
16 18 81"));