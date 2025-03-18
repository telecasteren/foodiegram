import { createTitle } from "/js/app/components/pageTitle/title.js";

export default function Feed() {
  const profileContainer = document.createElement("div");
  profileContainer.className =
    "profile-container justify-items-center min-h-screen p-8 gap-16";

  const title = createTitle("Feed.");

  profileContainer.appendChild(title);

  return profileContainer;
}
