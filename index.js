const floors = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
  ]
 // https://developer.mozilla.org/ru/docs/Web/API/Document/createTextNode

 
const floorContainerTag = document.querySelector(".floors");

floors.reverse().forEach((floorItem) => {
  const floorTag = document.createElement("div");
  floorTag.classList.add("floor")
  const pTag = document.createElement("p");
  pTag.textContent = floorItem.id;
  const upLabel = createFloorLabel(" UP", floorItem.id);
  const downLabel = createFloorLabel(" DOWN", floorItem.id);
  floorTag.append(pTag, upLabel, downLabel);
  floorContainerTag.append(floorTag);
});

function createFloorLabel(text, id) {
  const label = document.createElement("label");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.name = `floor-${id}`;

  const labelText = document.createTextNode(text);
  label.append(checkbox, labelText);

  return label;
}
