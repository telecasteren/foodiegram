function createButton({ text, href, newTab = false }) {
  const primaryBtn = document.createElement("a");
  primaryBtn.className = "btn btn-primary";

  primaryBtn.href = href || "#";
  primaryBtn.target = newTab ? "_blank" : "_self";

  if (newTab) {
    primaryBtn.rel = "noopener noreferrer";
  }

  primaryBtn.textContent = text;

  return primaryBtn;
}
export default createButton;

// Use like this:

//   const button = createButton({
//     text: "Login",
//     href: "/path/to/login/",
//     newTab: true,
//   });
//   element.appendChild(button);
