var today = new Date()
var curHr = today.getHours()

function greeting(curHr){
  if (curHr < 12) {
    return ('Good Morning')
  } else if (curHr < 18) {
    return ('Good Afternoon')
  } else {
    return ('Good Evening')
  }
}


function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var user=getCookie("username");
  if (user != "") {
    return(user);
  } else {
     user = prompt("Please enter your name:","");
     if (user != "" && user != null) {
       setCookie("username", user, 30);
     }
  }
}

function doDate()
{
    var str = new Date().toLocaleString();
    document.getElementById("todaysDate").innerHTML = str;
}

setInterval(doDate, 1000);

fetch('https://api.quotable.io/random')
  .then(response => response.json())
  .then(data => {
    var shit = `${data.content} — ${data.author}`
    document.getElementById("randomQuote").innerHTML = shit;
  })
