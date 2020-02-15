var dateString = "2002-06-21"; //Date of Birth

calcAge(dateString);

function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000)); // 31557600000 is 24 * 3600 * 365.25 * 1000 
}