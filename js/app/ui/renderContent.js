import Dashboard from "/js/app/routes/dashboard/createDashboard.js";
import Profile from "/js/app/routes/profile/createProfile.js";
import Feed from "/js/app/routes/feed/createFeed.js";
import { updateUnderline } from "/js/app/components/navbar/updateUnderline.js";
import { displayAuthForms } from "/js/app/events/authForm/displayAuthForms.js";
import { createCards } from "/js/app/routes/feed/createCards.js";

export default function renderContent() {
  function renderPage() {
    const authContent = document.getElementById("auth-content");
    const feedContent = document.getElementById("feed-content");
    const profileContent = document.getElementById("profile-content");

    if (!authContent && !profileContent && !feedContent) return;

    switch (window.location.pathname) {
      case "/":
        if (authContent) {
          authContent.innerHTML = "";
          authContent.appendChild(Dashboard());
          displayAuthForms();
        }
        break;
      case "/user/feed/":
        if (feedContent) {
          feedContent.innerHTML = "";
          feedContent.prepend(Feed());
          feedContent.appendChild(createCards());
        }
        break;
      case "/user/profile/":
        if (profileContent) {
          profileContent.innerHTML = "";
          profileContent.appendChild(Profile());
        }
        break;
      default:
        if (authContent) {
          authContent.innerHTML = "";
          authContent.appendChild(Dashboard());
          displayAuthForms();
        }
    }

    const currentPath = window.location.pathname;
    const navId = `nav-${
      currentPath === "/"
        ? "dashboard"
        : currentPath.split("/").filter(Boolean).pop()
    }`;
    const currentNavEl = document.getElementById(navId);
    if (currentNavEl) updateUnderline(currentNavEl);
  }

  window.addEventListener("popstate", renderPage);
  renderPage();
}
