import { createTitle } from "/js/app/components/pageTitle/title.js";

export default function Profile() {
  const profileContainer = document.createElement("div");
  profileContainer.className =
    "profile-container justify-items-center min-h-screen p-8 gap-16";

  const title = createTitle("Profile.");
  title.className = "text-bigger m-4";

  profileContainer.appendChild(title);

  return profileContainer;
}
