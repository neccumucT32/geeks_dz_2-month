function Light() {
  const red = document.getElementById("Red");
  const yellow = document.getElementById("Yellow");
  const green = document.getElementById("Green");
  const description = document.getElementById("Description");

  function Red() {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "rgb(111, 111, 0)";
    green.style.backgroundColor = "green";
    description.innerHTML = "stop";
    description.style.color = "red";
  }
  function Yellow() {
    red.style.backgroundColor = "rgb(107, 2, 2)";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";
    description.innerHTML = "wait";
    description.style.color = "Yellow";
  }
  function Green() {
    red.style.backgroundColor = "rgb(107, 2, 2)";
    yellow.style.backgroundColor = "rgb(111, 111, 0)";
    green.style.backgroundColor = "greenYellow";
    description.innerHTML = "go";
    description.style.color = "Green";
  }
  red.onclick = () => {
    Red();
  };
  yellow.onclick = () => {
    Yellow();
  };
  green.onclick = () => {
    Green();
  };
}

Light();
