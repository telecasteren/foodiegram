import { createTitle } from "/js/app/components/titles/title.js";
import { userLookup } from "/js/utils/source/users/users.js";

export default function Heading() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = parseInt(urlParams.get("id"));
  const user = userLookup[userId];

  const userHeading = document.createElement("div");
  userHeading.classList.add(
    "flex",
    "flex-wrap",
    "justify-center",
    "items-center",
    "gap-2"
  );

  const username = createTitle(user.username);
  username.className = "text-bigger m-4";

  const avatarWrapper = document.createElement("div");
  avatarWrapper.className = `relative inline-flex items-center justify-center
  w-32 h-32 overflow-hidden bg-gray-100 rounded-full ring-2 ring-accent-light
  dark:bg-gray-600 dark:ring-accent-dark`;

  const avatarPlaceholder = document.createElement("span");
  avatarPlaceholder.className =
    "font-medium text-lg text-gray-600 dark:text-gray-300";
  avatarPlaceholder.textContent = "JL";

  const avatar = document.createElement("img");
  avatar.className = "w-32 h-32 object-cover";
  avatar.src = user.avatarSrc;
  avatar.alt = user.avatarAlt;

  if (avatar.src != null || "") {
    avatarWrapper.appendChild(avatar);
  } else {
    avatarWrapper.appendChild(avatarPlaceholder);
  }

  userHeading.appendChild(avatarWrapper);
  userHeading.appendChild(username);

  return userHeading;
}
