var dateString = "21/06/2002"; // Date of Birth

function calcAge(dateString) {
  var birthday = +new Date(dateString.split('/').reverse().join('/'));
  return ~~((Date.now() - birthday) / (31557600000)); // 31557600000 is 24 * 3600 * 365.25 * 1000
}

var ageElement = document.getElementById("age");
if (ageElement) {
  ageElement.innerText = calcAge(dateString);
}

function enableNavBar() {
  var x = document.getElementById("navbar");
  if (x.classList.contains("responsive")) {
    x.classList.remove("responsive");
  } else {
    x.classList.add("responsive");
  }
}
