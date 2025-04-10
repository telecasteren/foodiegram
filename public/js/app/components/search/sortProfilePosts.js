export function sortProfilePosts() {
  const container = document.createElement("div");
  container.className = "sortOptions relative";

  const button = document.createElement("p");
  button.textContent = "Sort posts ->";
  button.className = "cursor-pointer hover:underline";
  button.id = "dropdownInformationButton";
  button.setAttribute("data-dropdown-toggle", "dropdownInformation");

  const dropdown = document.createElement("div");
  dropdown.id = "dropdownInformation";
  dropdown.className =
    "z-10 absolute hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-[#0f0c29] dark:divide-gray-600";

  const userInfo = document.createElement("div");
  userInfo.className = "px-4 py-3 text-sm text-gray-900 dark:text-white";
  userInfo.innerHTML = `<div class="font-medium truncate">Filter posts by:</div>`;

  const menuList = document.createElement("ul");
  menuList.className = "py-2 text-sm text-gray-700 dark:text-gray-200";
  menuList.setAttribute("aria-labelledby", "dropdownInformationButton");

  const items = ["Most recent", "Most likes", "Most comments"];
  items.forEach((text) => {
    const li = document.createElement("li");
    li.className =
      "w-full text-black hover:text-accent-light dark:text-white dark:hover:text-accent-dark";
    const a = document.createElement("a");
    a.href = "#";
    a.className = "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600";
    a.textContent = text;
    li.appendChild(a);
    menuList.appendChild(li);
  });

  dropdown.appendChild(userInfo);
  dropdown.appendChild(menuList);

  container.appendChild(button);
  container.appendChild(dropdown);

  button.addEventListener("click", () => {
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !container.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });

  return container;
}
