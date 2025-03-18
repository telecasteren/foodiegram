export function createTitle(text = "Foodiegram") {
  const title = document.createElement("h1");
  title.className = "text-[2rem] text-center dark:text-darkText";
  title.textContent = text;

  return title;
}

// Use like this:

// const title = createTitle("input title here");
// element.appendChild(title);
