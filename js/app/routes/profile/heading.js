import { createTitle } from "/js/app/components/pageTitle/title.js";
import { users } from "/js/utils/source/users/users.js";

export default function Heading() {
  const urlParams = new URLSearchParams(window.location.search);
  const userIndex = parseInt(urlParams.get("user")) || 0;
  const user = users[userIndex];

  const userHeading = document.createElement("div");
  userHeading.className = "flex flex-wrap justify-end items-center gap-2";

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
  avatar.src = user.avatarSrc;
  avatar.alt = user.avatarAlt;
  avatar.className = "rounded-full";

  if (avatar.src != null || "") {
    avatarWrapper.appendChild(avatar);
  } else {
    avatarWrapper.appendChild(avatarPlaceholder);
  }

  userHeading.appendChild(avatarWrapper);
  userHeading.appendChild(username);

  return userHeading;
}
