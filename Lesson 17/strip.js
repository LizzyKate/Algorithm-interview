function solution(input, markers) {
  // Split the input string into lines
  var lines = input.split("\n");

  // Iterate over the lines and remove the text after the markers
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i];

    // Find the position of the first marker in the line
    var pos = line.length;

    for (var j = 0; j < markers.length; j++) {
      var marker = markers[j];
      var markerPos = line.indexOf(marker);
      if (markerPos !== -1 && markerPos < pos) {
        pos = markerPos;
      }
    }
    // Remove the text after the marker (and any trailing whitespace)
    lines[i] = line.slice(0, pos).trimRight();
  }
  // Join the lines back into a single string and return it
  return lines.join("\n");
}

solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]);
