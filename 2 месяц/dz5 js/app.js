function Light() {
  const red = document.getElementById("Red");
  const yellow = document.getElementById("Yellow");
  const green = document.getElementById("Green");

  function Red() {
    red.style.backgroundColor = "red";
    yellow.style.backgroundColor = "rgb(111, 111, 0)";
    green.style.backgroundColor = "green";
    setTimeout(Yellow, 2000);
  }
  function Yellow() {
    red.style.backgroundColor = "rgb(107, 2, 2)";
    yellow.style.backgroundColor = "yellow";
    green.style.backgroundColor = "green";
    setTimeout(Green, 2000);
  }
  function Green() {
    red.style.backgroundColor = "rgb(107, 2, 2)";
    yellow.style.backgroundColor = "rgb(111, 111, 0)";
    green.style.backgroundColor = "greenYellow";
    setTimeout(Red, 2000);
  }
  function Action() {
    const red = document.getElementById("Стой");
    const yellow = document.getElementById("Жди");
    const green = document.getElementById("Иди");
  }
  Red();
}
switch (Light) {
  case 0:
    actionText.innerText = "Стой";
    break;
  case 1:
    actionText.innerText = "Жди";
    break;
  case 2:
    actionText.innerText = "Иди";
    break;
}
Light();
