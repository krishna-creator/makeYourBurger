window.onload = function () {
  Swal.fire({
    icon: "success",
    title: "Welcome",
    html: "<b>Only for mobiles,</b> make your own burger😋🍔,scroll items left for more🥦🧀🥓🍅🍳<br>you can change drinks also😁",
    footer: "&copy All rights reserved !",
  });
};
var t = 45,
  item,
  start,
  calories = 0;
var cheeseRotation = false;
var createNew = true;
var alt = true;
function clicked(name, height, amount) {
  if (createNew) {
    start = -15;
    var container = document.getElementById("content");
    var cal = document.getElementById("cal");
    item = document.createElement("div");
    container.appendChild(item);
    item.className = name;
    if (name == "finish") {
      createNew = false;
      alert("comment down your calories gained😁,have a nice day🙂");
    }
    //console.log(t);
    calories += amount;
    cal.innerHTML = "Calories:" + calories + "kcal";
    if (name == "onion") {
      var f = document.createElement("div");
      container.appendChild(f);
      f.className = name;
      f.style.top = t + "%";
      f.style.transform = "translate(23%,30%)";
    }
    if (name == "cheese") {
      if (cheeseRotation) {
        item.style.height = "40px";
        item.style.width = "50px";
        item.style.transform = "translateX(-50%) rotateZ(15deg)";
        cheeseRotation = false;
      } else {
        item.style.height = "50px";
        item.style.width = "40px";
        item.style.transform = "translateX(-50%) rotateZ(75deg)";
        cheeseRotation = true;
      }
    }
    var s = setInterval(function () {
      createNew = false;
      item.style.top = start + "%";
      start += 2;
      if (start >= t) {
        item.style.top = t + "%";
        if (t < 5 && alt) {
          alert("that's too heavy lets finish now");
          //c('finish',100,1);
          createNew = true;
          alt = false;
        }
        t = t - height;
        if (alt && name != "finish") {
          createNew = true;
        }
        clearInterval(s);
      }
    }, 1);
  }
}
var color;
function drinks(v) {
  var cup = document.getElementById("cup");
  cup.style.borderTop = "75px solid " + v;
}
