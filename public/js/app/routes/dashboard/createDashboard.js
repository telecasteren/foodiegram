import { createTitle } from "/js/app/components/pageTitle/title.js";
import createButton from "/js/app/components/buttons/primaryBtn.js";

export default function Dashboard() {
  const dashboardContainer = document.createElement("div");
  dashboardContainer.className =
    "dashboard-container justify-items-center min-h-screen p-8 gap-16";

  const header = document.createElement("header");
  const title = createTitle("FOODIEGRAM.");
  title.hidden = true;

  const logo = document.createElement("img");
  logo.className = "mb-10 w-94";
  logo.src = "/resources/logo/foodiegram-logo-pizza.png";
  logo.alt = "Official Foodiegram logo";
  header.appendChild(title);
  header.appendChild(logo);

  const loginBtn = createButton({
    text: "Log in.",
    href: "#",
    newTab: false,
  });
  loginBtn.id = "loginBtn";
  loginBtn.classList.add("btn-primary");
  loginBtn.addEventListener("click", (e) => e.preventDefault());

  const signupBtn = createButton({
    text: "Sign up.",
    href: "#",
    newTab: false,
  });
  signupBtn.id = "signupBtn";
  signupBtn.classList.add("btn-secondary");
  signupBtn.addEventListener("click", (e) => e.preventDefault());

  dashboardContainer.appendChild(header);
  dashboardContainer.appendChild(loginBtn);
  dashboardContainer.appendChild(signupBtn);

  return dashboardContainer;
}
