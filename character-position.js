function charPosition(input) {
  var noSpaces = input.split(" ").join("").toLowerCase();
  var letters = {};
  for (var i = 0; i < noSpaces.length; i++) {
    if (letters[noSpaces[i]] === undefined) {
      letters[noSpaces[i]] = i.toString();
    }
    else {
      letters[noSpaces[i]] = letters[noSpaces[i]] + " & " + i;
    }
  }
  return letters;
}