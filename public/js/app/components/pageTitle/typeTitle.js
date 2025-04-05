export function typeTitle(text) {
  const title = document.createElement("h1");
  title.className = "text-[2rem] text-center dark:text-darkText";

  const dot = document.createElement("span");
  dot.style.color = "var(--accent)";
  dot.textContent = ".";

  let index = 0;
  function typeLetters() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetters, 100);
    } else if (index === text.length) {
      title.appendChild(dot);
    }
  }

  typeLetters();
  return title;
}
