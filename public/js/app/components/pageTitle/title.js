export function createTitle(text) {
  const title = document.createElement("h1");
  title.className = "text-[2rem] text-center dark:text-darkText";
  title.textContent = text;

  return title;
}
