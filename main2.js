
// console.log('getShortestStr: ', getShortestStr());
function getShortestStr() {
    var visitedNums = {}
    let result = '000'
    let longStr = getLongNumStr()
    for (let i = 0; i < longStr.length - 3; i++) {
        let currTest = longStr.substring(i, i + 4)
        if (!visitedNums[currTest]) {
            result += currTest[3]
            visitedNums[currTest] = true
        }
    }
    return result
}

function getLongNumStr() {
    let longStr = ''
    for (let i = 0; i < 10000; i++) {
        longStr += get4DigStr(i)
    }
    return longStr
}

function get4DigStr(num) {
    let str = ''
    if (num < 1000) str += '0'
    if (num < 100) str += '0'
    if (num < 10) str += '0'
    return str + num
}

function getNDigStr(num, digNum) {
    let str = ''
    for (let i = digNum - 1; i > 0; i--) {
        if (num < 10 ** i) str += '0'
    }
    return str + num
}

console.log('getNDigStr(1234, 4): ', getNDigStr(1234, 4));
