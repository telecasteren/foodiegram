import { typeTitle } from "/js/app/components/pageTitle/typeTitle.js";
import createButton from "/js/app/components/buttons/primaryBtn.js";
import Widget from "/js/app/routes/dashboard/widget/widget.js";

export default function Dashboard() {
  const dashboardContainer = document.createElement("div");
  dashboardContainer.className =
    "dashboard-container justify-items-center min-h-screen p-8 gap-16";

  const header = document.createElement("header");
  const title = typeTitle("FOODIEGRAM");
  title.className = "text-[4.5rem] typewriter";
  header.appendChild(title);

  const contentContainer = document.createElement("div");
  contentContainer.className =
    "grid grid-cols-2 justify-center items-center gap-6 mt-16";

  const buttonContainer = document.createElement("div");
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
  buttonContainer.appendChild(loginBtn);
  buttonContainer.appendChild(signupBtn);

  const wedgy = Widget();

  contentContainer.appendChild(buttonContainer);
  contentContainer.appendChild(wedgy);
  dashboardContainer.appendChild(header);
  dashboardContainer.appendChild(contentContainer);

  return dashboardContainer;
}
