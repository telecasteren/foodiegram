import { imgs } from "/js/app/routes/dashboard/widget/widgetImgs.js";

export default function Widget() {
  const container = document.createElement("div");
  container.className = `w-[200px] h-[280px] rounded-lg relative`;
  const imgContainers = [];
  let isStaggeredLarge = false;

  const maxStaggerAmount = 20;
  const initialHeight = 280;
  const maxStagger = (imgs && imgs.length - 1) * maxStaggerAmount;
  container.style.minHeight = `${initialHeight + maxStagger}px`;

  imgs.forEach((img, index) => {
    const imgContainer = document.createElement("div");
    imgContainer.id = `img-${index}`;
    imgContainer.className =
      "rounded-lg absolute top-0 left-0 w-[100%] h-[100%] transform duration-300";
    imgContainer.style.zIndex = `${imgs.length - index}`;
    imgContainers.push(imgContainer);

    const imgEl = document.createElement("img");
    imgEl.className =
      "cursor-pointer rounded-lg opacity-[80%] w-full h-full object-cover";
    imgEl.src = img.card.src;
    img.alt = img.card.alt;

    imgContainer.appendChild(imgEl);
    container.appendChild(imgContainer);
  });

  // Initially setInterval, test with setTimeout
  setInterval(() => {
    isStaggeredLarge = !isStaggeredLarge;
    imgContainers.forEach((el, index) => {
      const staggerAmount = isStaggeredLarge ? maxStaggerAmount : 10;
      el.style.transform = `translate(${index * staggerAmount}px, ${
        index * staggerAmount
      }px)`;
    });
  }, 3000);

  return container;
}
