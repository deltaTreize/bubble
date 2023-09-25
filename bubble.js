function createBubble() {
  const div = document.querySelector("div");
  const createElement = document.createElement("span");
  let size = Math.random() * 60;

  createElement.style.width = 20 + size + "px";
  createElement.style.height = 20 + size + "px";
  createElement.style.left = Math.random() * innerWidth + "px";
  div.appendChild(createElement);

  setTimeout(() => {
    createElement.remove();
  }, 3000);
}
setInterval(createBubble, 50);
