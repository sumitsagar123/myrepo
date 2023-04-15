const currenttime = document.getElementById("demo");
setInterval(function () {
  let date = new Date();
  h = date.getHours();
  m = date.getMinutes();
  s = date.getSeconds();
  ampm = "AM";
  if (h >= 12) {
    h - 12;
    ampm = "PM";
  }
  h = h === 0 ? (h = 12) : h;
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  // console.log(s<10?"true":"false")
  currenttime.innerText = `${h}:${m}:${s} ${ampm}`;
}, 1000);

let select_toggle = document.getElementById("toggle");
const toggle = () => {
  var element = document.body;
  if (select_toggle.innerHTML == "Grey Mode") {
    element.style.backgroundColor = "grey";
    element.style.color = "black";
    select_toggle.innerHTML = "Light Mode";
    select_toggle.style.backgroundColor="grey"
  } else if (select_toggle.innerHTML == "Light Mode") {
    element.style.backgroundColor = "white";
    element.style.color = "black";
    select_toggle.innerHTML = "Grey Mode";
    select_toggle.style.backgroundColor="white"
  }
  console.log(element.style.backgroundColor);
};