var dateString = "2002-06-21"; //Date of Birth

calcAge(dateString);

function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000)); // 31557600000 is 24 * 3600 * 365.25 * 1000 
}


setInterval(function() {
  var about = ["love to programme", "love to play games", "am a student", "live in London", "have a Dual Citizenship"]
  var choice = about[Math.floor(Math.random() * about.length)];
  document.getElementById("choices").innerHTML = choice;
}, 3000);