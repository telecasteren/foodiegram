import Heading from "/js/app/routes/profile/sections/heading.js";
import Details from "/js/app/routes/profile/sections/details.js";
import Description from "/js/app/routes/profile/sections/description.js";
import { createSortOptions } from "/js/app/components/search/sortOptions.js";
import Posts from "/js/app/routes/profile/sections/posts.js";
import { userLookup } from "/js/utils/source/users/users.js";
import { userMessage } from "/js/utils/messages/userMessage.js";

export default function Profile() {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = parseInt(urlParams.get("id"));
  const user = userLookup[userId];

  if (!user) {
    userMessage(
      "error",
      "Woops! Couldn't find this user. Should they have been here? Try again later."
    );
    return;
  }

  const profileContainer = document.createElement("div");
  profileContainer.className = "profile-container min-h-screen p-8 gap-16";

  const userHeading = Heading();
  const userDetails = Details();
  const userDescription = Description();
  const sortOptions = createSortOptions({
    triggerType: "p",
    triggerText: "Sort posts →",
  });
  const postsList = Posts();

  profileContainer.appendChild(userHeading);
  profileContainer.appendChild(userDetails);
  profileContainer.appendChild(userDescription);
  profileContainer.appendChild(sortOptions);
  profileContainer.appendChild(postsList);

  return profileContainer;
}
