import Heading from "/js/app/routes/profile/heading.js";
import Details from "/js/app/routes/profile/details.js";
import Description from "/js/app/routes/profile/description.js";

export default function Profile() {
  const profileContainer = document.createElement("div");
  profileContainer.className = "profile-container min-h-screen p-8 gap-16";

  const userHeading = Heading();
  const userDetails = Details();
  const userDescription = Description();

  profileContainer.appendChild(userHeading);
  profileContainer.appendChild(userDetails);
  profileContainer.appendChild(userDescription);

  return profileContainer;
}
