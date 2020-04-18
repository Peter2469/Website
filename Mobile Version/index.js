var dateString = "2002-06-21"; //Date of Birth

calcAge(dateString);

function calcAge(dateString) {
  var birthday = +new Date(dateString);
  return ~~((Date.now() - birthday) / (31557600000)); // 31557600000 is 24 * 3600 * 365.25 * 1000
}

function ThemeChanger() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var name = document.getElementById("Toggle");
  if (name.innerHTML === "Dark Theme") {
    name.innerHTML = "Light Theme";
  } else {
    name.innerHTML = "Dark Theme"
  }
}

function autotheme() {

  var today=  new Date();
  var curHr=today.getHours()

  if (curHr >= 22 || curHr <= 7) {
    var element = document.body;
    element.classList
    element.classList.toggle("dark-mode",true);
    var x = document.getElementById("Toggle");
    if (x.innerHTML === "Light Theme") {
      x.innerHTML = "Dark Theme";
    } else {
      x.innerHTML = "Light Theme";
    }
  }
  var time = "";
  if(curHr >= 22 && curHr <= 24) { //From 22-24
     time = new Date();
    time.setDate(time.getDate()+1); 
    time.setHours(7);
    time.setMinutes(0);
    time.setSeconds(0);
  } else if(curHr >= 0 && curHr <= 7) { // From 00 - 07
    time = new Date();
    time.setHours(7);
    time.setMinutes(0);
    time.setSeconds(0);
  } else if(curHr <= 7 && curHr >= 22) { // From 07 - 22
    time = new Date();
    time.setHours(22);
    time.setMinutes(0);
    time.setSeconds(0);

  }
  setTimeout(autotheme, time-Date.now())
}

function Events() {
  today = new Date();
  var date = (today.getMonth()+1)+'-'+today.getDate();
  autotheme();
  if (date === "12-25"){
    var christmas = document.getElementById("christmas"); 
    console.log("Merry Christmas!")
    christmas.play();
  }else if (date === "6-21"){
    var birthday = document.getElementById("birthday");
    console.log("It's my " + calcAge(dateString) + "th Birthday today!")
    birthday.play()
  }else{
    console.log("There is no Events set for today")
  }
}