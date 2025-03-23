export default function createPostBtn() {
  const menuWrapper = document.createElement("div");
  menuWrapper.className = "fixed bottom-6 right-24 group";

  const menu = document.createElement("div");
  menu.id = "speed-dial-menu-dropdown";
  menu.className =
    "flex flex-col justify-end hidden py-1 mb-4 bg-white border border-gray-100 rounded-lg shadow-xs dark:bg-gray-700 dark:border-gray-600";

  const ul = document.createElement("ul");
  ul.className = "text-sm text-gray-500 dark:text-gray-300";

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.className =
    "flex items-center px-5 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 hover:text-gray-900 dark:hover:text-white";

  const svg = document.createElement("svg");
  svg.className = "w-3.5 h-3.5 me-2";
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.setAttribute("fill", "currentColor");
  svg.setAttribute("viewBox", "0 0 20 18");

  const path = document.createElement("path");
  path.setAttribute("d", "M18 0H2a2 2...");

  svg.appendChild(path);
  a.appendChild(svg);
  a.appendChild(document.createTextNode("New post"));
  li.appendChild(a);
  ul.appendChild(li);
  menu.appendChild(ul);
  menuWrapper.appendChild(menu);

  const button = document.createElement("button");
  button.type = "button";
  button.id = "create-post";
  button.setAttribute("aria-controls", "speed-dial-menu-dropdown");
  button.className =
    "flex items-center justify-center ml-auto text-white bg-blue-700 rounded-full w-14 h-14 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";

  const svgButton = document.createElement("svg");
  svgButton.className = "w-6 h-6";
  svgButton.setAttribute("aria-hidden", "true");
  svgButton.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svgButton.setAttribute("fill", "currentColor");
  svgButton.setAttribute("viewBox", "0 0 20 20");

  const pathButton = document.createElement("path");
  pathButton.setAttribute(
    "d",
    "m13.835 7.578-.005.007-7.137 7.137 2.139 2.138 7.143-7.142-2.14-2.14Z..."
  );
  svgButton.appendChild(pathButton);
  button.appendChild(svgButton);

  const span = document.createElement("span");
  span.className = "sr-only";
  span.textContent = "Open actions menu";
  button.appendChild(span);

  menuWrapper.appendChild(button);

  return menuWrapper;
}
