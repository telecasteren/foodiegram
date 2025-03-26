import { initialUnderline } from "/js/app/components/navbar/updateUnderline.js";

export default function Navbar() {
  // DESKTOP MENU
  const pathname = window.location.pathname;

  const desktopNav = document.createElement("nav");
  desktopNav.id = "desktop-nav";
  desktopNav.className = "mt-20 ml-20 hidden md:block";

  const desktopUl = document.createElement("ul");
  desktopUl.className = "active flex space-x-8 dark:text-dark";

  const links = [
    { href: "/", text: "Dashboard." },
    { href: "/user/feed/", text: "Feed." },
    { href: "/user/profile/", text: "Profile." },
  ];

  links.forEach((link) => {
    const li = document.createElement("li");
    li.id = `nav-${link.text.toLowerCase()}`.replace(/\s+/g, "-");

    const a = document.createElement("a");
    a.href = link.href;
    a.textContent = link.text;
    a.addEventListener("click", (e) => {
      if (window.location.pathname !== link.href) {
        e.preventDefault();
        window.location.href = link.href;
      }
    });

    li.appendChild(a);
    desktopUl.appendChild(li);
  });

  desktopNav.appendChild(desktopUl);

  // MOBILE MENU
  const mobileNav = document.createElement("nav");
  mobileNav.id = "mobile-nav";

  const container = document.createElement("div");
  container.className =
    "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4";

  const logoLink = document.createElement("a");
  logoLink.href = "#";
  logoLink.className = "flex items-center space-x-3 rtl:space-x-reverse";

  const logoImg = document.createElement("img");
  logoImg.src = "/resources/logo/logo-pizza.png";
  logoImg.className = "h-8 dark:invert";
  logoImg.alt = "Foodiegram logo";

  const logoText = document.createElement("span");
  logoText.className =
    "self-center text-2xl font-200 whitespace-nowrap dark:text-white";
  logoText.textContent = "Foodiegram.";

  logoLink.appendChild(logoImg);
  logoLink.appendChild(logoText);

  const menuButton = document.createElement("button");
  menuButton.setAttribute("data-collapse-toggle", "navbar-hamburger");
  menuButton.type = "button";
  menuButton.className = `
  inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg
  hover:bg-accent focus:outline-none focus:ring-2 focus:ring-gray-200
  dark:text-gray-400 dark:hover:bg-accent-dark dark:focus:ring-gray-600`;
  menuButton.setAttribute("aria-controls", "navbar-hamburger");
  menuButton.setAttribute("aria-expanded", "false");

  const srText = document.createElement("span");
  srText.className = "sr-only";
  srText.textContent = "Open main menu";

  const menuIcon = document.createElement("img");
  menuIcon.className = "";
  menuIcon.setAttribute("aria-hidden", "true");
  menuIcon.src = "/resources/icons/hamburger-icon-f.png";
  menuIcon.alt = "Navigation menu";

  menuButton.appendChild(srText);
  menuButton.appendChild(menuIcon);

  const menuContainer = document.createElement("div");
  menuContainer.className = "hidden w-full";
  menuContainer.id = "navbar-hamburger";

  const menuList = document.createElement("ul");
  menuList.className = "flex flex-col font-medium mt-4 rounded-lg";

  const menuItems = [
    {
      text: "Dashboard",
      href: "/",
      className:
        "block py-2 px-3 text-black bg-accent-light rounded-sm dark:bg-accent-dark",
    },
    {
      text: "Feed",
      href: "/user/feed/",
      className:
        "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
    },
    {
      text: "Profile",
      href: "/user/profile/",
      className:
        "block py-2 px-3 text-gray-900 rounded-sm hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white",
    },
  ];

  menuItems.forEach((item) => {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = item.href;
    a.className = item.className;
    a.textContent = item.text;
    li.appendChild(a);
    menuList.appendChild(li);
  });

  menuContainer.appendChild(menuList);
  container.appendChild(logoLink);
  container.appendChild(menuButton);
  container.appendChild(menuContainer);
  mobileNav.appendChild(container);

  document.body.prepend(mobileNav);
  document.body.prepend(desktopNav);

  menuButton.addEventListener("click", () => {
    menuContainer.classList.toggle("hidden");
  });

  initialUnderline(links);
  window.addEventListener("resize", () => initialUnderline(links));

  function handleScreenChange() {
    if (window.innerWidth >= 778) {
      desktopNav.classList.remove("hidden");
      mobileNav.classList.add("hidden");
    } else {
      desktopNav.classList.add("hidden");
      mobileNav.classList.remove("hidden");
    }
  }

  window.addEventListener("resize", handleScreenChange);
  handleScreenChange();
}
