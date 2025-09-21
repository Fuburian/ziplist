function zipList(list1: (number | string)[], list2: (number | string) []): (number | string)[] {
  const minLength = Math.min(list1.length, list2.length);
  const zipped : (number | string) [] = [];

  for (let i = 0; i < minLength; i++) {
    zipped.push(list1[i]);
    zipped.push(list2[i]);
  }
  return zipped;
}

function zipListTheFunctionalWay(
  list1: (string | number)[],
  list2: (string | number) []) : (string | number)[] {
  const zipped = list1.map((value, index) => [value, list2[index]]);
  let final : (string | number)[] = [];
  final = final.concat(...zipped);
  return final;
}

console.log(zipList(['a', 'b', 'c'], [1, 2, 3]));
console.log(zipListTheFunctionalWay(['a', 'b', 'c'], [1, 2, 3]));
