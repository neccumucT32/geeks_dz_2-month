let originalArray = [1500, 400, 800, 750, 250, 8000, 150, 640, 100, 370];

function buildArrayItem(value = 0) {
  let div = document.createElement("div");
  div.className = "array-item";
  div.textContent = value;
  return div;
}
function renderArray(array, container) {
  container.innerHTML = "";
  const $arrayItems = array.map((item) => buildArrayItem(item));
  container.append(...$arrayItems);
}

let $originalArray = document.querySelector("#original .array");
renderArray(originalArray, $originalArray);

let $updatedArray = document.querySelector("#updated .array");
renderArray(["-"], $updatedArray);

document.addEventListener("click", function (event) {
  if (event.target.tagName !== "BUTTON") return;
  let action = event.target.textContent;
  if (action === "map -40%") {
    let updatedArray = originalArray.map((item) => item * 0.6);
    renderArray(updatedArray, $updatedArray); //  - 40%
  } else if (action === "map x5.7") {
    let updatedArray = originalArray.map((x) => x * 5.7);
    renderArray(updatedArray, $updatedArray); //  в тенге
  } else if (action === "filter < 1000") {
    let updatedArray = originalArray.filter((item) => item < 1000);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "filter evens") {
    let updatedArray = originalArray.filter((item) => item % 100 === 0);
    renderArray(updatedArray, $updatedArray);
  } else if (action === "reduce min") {
    let updatedArray = originalArray.reduce((min, item) => {
      return item < min ? item : min;
    }, originalArray[0]);
    renderArray([updatedArray], $updatedArray);
  } else if (action === "reduce max") {
    let updatedArray = originalArray.reduce((max, item) => {
      return item > max ? item : max;
    }, originalArray[0]);
    renderArray([updatedArray], $updatedArray);
  }
  renderArray([updatedArray], $updatedArray);
});
