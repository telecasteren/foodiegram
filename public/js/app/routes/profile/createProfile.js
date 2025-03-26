import Heading from "/js/app/routes/profile/sections/heading.js";
import Details from "/js/app/routes/profile/sections/details.js";
import Description from "/js/app/routes/profile/sections/description.js";
import Posts from "/js/app/routes/profile/sections/posts.js";

export default function Profile() {
  const profileContainer = document.createElement("div");
  profileContainer.className = "profile-container min-h-screen p-8 gap-16";

  const userHeading = Heading();
  const userDetails = Details();
  const userDescription = Description();
  const postsList = Posts();

  profileContainer.appendChild(userHeading);
  profileContainer.appendChild(userDetails);
  profileContainer.appendChild(userDescription);
  profileContainer.appendChild(postsList);

  return profileContainer;
}
