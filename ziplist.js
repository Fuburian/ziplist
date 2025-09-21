"use strict";
function zipList(list1, list2) {
    const minLength = Math.min(list1.length, list2.length);
    const zipped = [];
    for (let i = 0; i < minLength; i++) {
        zipped.push(list1[i]);
        zipped.push(list2[i]);
    }
    return zipped;
}
function zipListTheFunctionalWay(list1, list2) {
    const zipped = list1.map((value, index) => [value, list2[index]]);
    let final = [];
    final = final.concat(...zipped);
    return final;
}
console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
