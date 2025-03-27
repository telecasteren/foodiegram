export default function createPostBtn() {
  const menuWrapper = document.createElement("div");
  menuWrapper.className = "fixed bottom-6 right-24 group";

  const menu = document.createElement("div");
  menu.id = "speed-dial-menu-dropdown";
  menu.className = `flex flex-col justify-end hidden py-1 mb-4 bg-white
  border border-gray-100 rounded-lg shadow-xs dark:bg-gray-700 dark:border-gray-600`;

  const ul = document.createElement("ul");
  ul.className = "text-sm text-gray-500 dark:text-gray-300";

  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = "#";
  a.className = `flex items-center px-5 py-2 bg-white border border-gray-200 rounded-md shadow-sm hover:text-gray-900
  hover:bg-gray-100 dark:bg-[#0f0c29] dark:hover:bg-gray-600 dark:hover:text-white`;

  a.appendChild(document.createTextNode("New post"));
  li.appendChild(a);
  ul.appendChild(li);
  menu.appendChild(ul);
  menuWrapper.appendChild(menu);

  const button = document.createElement("button");
  button.type = "button";
  button.id = "create-post";
  button.setAttribute("aria-controls", "speed-dial-menu-dropdown");
  button.className = `flex items-center justify-center text-center ml-auto
  text-white bg-blue-700 rounded-full w-16 h-16 hover:bg-blue-800
  focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`;

  const buttonIcon = document.createElement("p");
  buttonIcon.className = "font-medium text-bigger text-center";
  buttonIcon.innerText = "+";
  button.appendChild(buttonIcon);

  const span = document.createElement("span");
  span.className = "sr-only";
  span.textContent = "Open actions menu";
  button.appendChild(span);

  menuWrapper.appendChild(button);

  return menuWrapper;
}
