var dateString = "2002-06-21"; //Date of Birth


function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000)); // 31557600000 is 24 * 3600 * 365.25 * 1000
}

function startUp(){
    document.getElementById("desc").innerHTML = calcAge(dateString) + " Year old Programmer from London, United Kingdom with knowledge in Python3, Javascript, HTML and CSS"
}