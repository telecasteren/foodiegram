function createButton({ text, href, newTab = false }) {
  const button = document.createElement("a");
  button.className = "btn";

  button.href = href || "#";
  button.target = newTab ? "_blank" : "_self";

  if (newTab) {
    button.rel = "noopener noreferrer";
  }

  button.textContent = text;

  return button;
}
export default createButton;

// Use like this:

//   const button = createButton({
//     text: "Login",
//     href: "/path/to/login/",
//     newTab: true,
//   });
//   element.appendChild(button);
