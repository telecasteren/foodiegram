import { createTitle } from "/js/app/components/pageTitle/title.js";
import { users } from "/js/utils/source/users/users.js";

export default function Details() {
  const urlParams = new URLSearchParams(window.location.search);
  const userIndex = parseInt(urlParams.get("user")) || 0;
  const user = users[userIndex];

  const userDetails = document.createElement("div");
  userDetails.className =
    "flex flex-wrap justify-center mr-0 items-center gap-2 md:justify-end md:mr-5";

  const username = createTitle(user.name);
  username.className = "text-sm m-4";

  const statsWrapper = document.createElement("div");
  statsWrapper.className = "flex flex-wrap gap-2";

  function createWrapper(number, label) {
    const container = document.createElement("div");
    container.className = "flex flex-col items-center";

    const wrapper = document.createElement("div");
    wrapper.className = `relative inline-flex items-center justify-center
      w-10 h-10 overflow-hidden bg-gray-100 rounded-full ring-2 ring-accent-light
      dark:bg-gray-600 dark:ring-accent-dark`;

    const text = document.createElement("div");
    text.className = "font-medium text-tiny text-gray-600 dark:text-gray-300";
    text.innerText = number;

    const labelText = document.createElement("div");
    labelText.className = "text-xs text-gray-500 dark:text-gray-400 mt-1";
    labelText.innerText = label;

    wrapper.appendChild(text);
    container.appendChild(wrapper);
    container.appendChild(labelText);
    return container;
  }

  const postsCircle = createWrapper(user.posts.numberOf, "posts");
  const followersCircle = createWrapper(user.followers, "followers");
  const followingCircle = createWrapper(user.following, "following");

  statsWrapper.appendChild(postsCircle);
  statsWrapper.appendChild(followersCircle);
  statsWrapper.appendChild(followingCircle);

  userDetails.appendChild(username);
  userDetails.appendChild(statsWrapper);

  return userDetails;
}
