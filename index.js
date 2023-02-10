let elems = document.querySelectorAll(".img");
elems.forEach((elem) => {
  elem.addEventListener("click", addBorder);
});

function addBorder() {
  elems.forEach((elem) => {
    elem.classList.remove("add-border");
  });
  this.classList.add("add-border");
  this.setAttribute("name", "selected");

  // let atrr = this.getAttribute()
}
elems.forEach((elem) => {
  let btn = document.getElementById("button");
  if (elem.hasAttribute("name")) {
    btn.addEventListener("click", changeContent);
  }
});

function changeContent(value) {
  let container = document.querySelector(".container");
  let containerItem = document.querySelector(".container-item");
  containerItem.style.display = "none";
  let newContainer = document.createElement("div");
  newContainer.classList.add("container-item2");
  container.appendChild(newContainer);
  let div1 = document.createElement("div");
  div1.classList.add("container-item-child12");
  div1.innerText = "Thank You";
  newContainer.appendChild(div1);
  let div2 = document.createElement("div");
  div2.classList.add("container-item-child22");
  div2.innerText = `Feedback : `;
  newContainer.appendChild(div2);
  let div3 = document.createElement("div");
  div3.classList.add("container-item-child32");
  div3.innerText = `We'll use your feedback to improve our service`;
  newContainer.appendChild(div3);

  // console.log(containerItem);
}
// changeContent();
// console.log(btn);
