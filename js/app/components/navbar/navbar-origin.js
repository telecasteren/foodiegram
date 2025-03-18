// import {
//   initialUnderline,
//   updateUnderline,
// } from "/js/app/components/navbar/updateUnderline.js";

// export default function Navbar() {
//   const pathname = window.location.pathname;

//   const nav = document.createElement("nav");
//   nav.id = "nav-bar";
//   nav.className = "mt-20 ml-20";

//   const ul = document.createElement("ul");
//   ul.className = "active flex space-x-8 dark:text-dark";

//   const links = [
//     { href: "/", text: "Dashboard." },
//     { href: "/user/feed/", text: "Feed." },
//     { href: "/user/profile/", text: "Profile." },
//   ];

//   links.forEach((link) => {
//     const li = document.createElement("li");
//     li.id = `nav-${link.text.toLowerCase()}`.replace(/\s+/g, "-");

//     const a = document.createElement("a");
//     a.href = link.href;
//     a.textContent = link.text;
//     a.addEventListener("click", (e) => {
//       if (window.location.pathname !== link.href) {
//         e.preventDefault();
//         window.location.href = link.href;
//       }
//     });

//     li.addEventListener("mouseenter", () => updateUnderline(li));

//     li.addEventListener("mouseleave", () => {
//       const currentPath = window.location.pathname;
//       const activeLi = document.getElementById(
//         `nav-${
//           currentPath === "/"
//             ? "dashboard"
//             : currentPath.split("/").filter(Boolean).pop()
//         }`
//       );
//       if (activeLi) updateUnderline(activeLi);
//     });

//     li.appendChild(a);
//     ul.appendChild(li);
//   });

//   nav.appendChild(ul);
//   document.body.prepend(nav);

//   initialUnderline(links);
//   window.addEventListener("resize", () => initialUnderline(links));
// }
