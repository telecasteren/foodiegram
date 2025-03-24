import createButton from "/js/app/components/buttons/primaryBtn.js";
import { users } from "/js/utils/source/users/users.js";

export default function Description() {
  const urlParams = new URLSearchParams(window.location.search);
  const userIndex = parseInt(urlParams.get("user")) || 0;
  const user = users[userIndex];

  const userDescription = document.createElement("div");
  userDescription.className = "grid grid-cols-1 mt-16";

  const description = document.createElement("p");
  description.innerText = user.description;
  description.className = "text-sm m-2 justify-self-center";

  const followBtn = createButton({
    text: "Follow.",
    href: "#",
    newTab: false,
  });
  followBtn.classList.add("btn-secondary", "justify-self-center");
  followBtn.addEventListener("click", (e) => e.preventDefault());

  userDescription.appendChild(description);
  userDescription.appendChild(followBtn);

  return userDescription;
}
