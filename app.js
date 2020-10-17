// 1 = 15
// 2 = 47
// 3 = 58
// 4 = 41
// 5 = 78
// 6 = 229

console.log("I live!!!!");

var max_categories = 6

var items_in_category = [
  -1,
  15,
  47,
  58,
  41,
  78,
  229
]

function getPart() {
  var cat = Math.floor(Math.random() * max_categories) + 1;

  var item = Math.floor(Math.random() * items_in_category[cat]) + 1;

  return "(" + cat + ", " + item + ")";
}

function getParts(number) {
  parts = []
  while (parts.length < number) {
    parts.push(getPart());
  }
  return parts;
}

function test() {
  var n = document.getElementById("n-to-randomize").value;
  parts = getParts(n);
  document.getElementById("result").innerHTML = parts.join(', ');
}
