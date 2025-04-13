import { popUpModal } from "/js/app/components/modal/createModal.js";

function createNewPost() {
  popUpModal();
}

export function newPostMenuEvents() {
  const newPostBtn = document.getElementById("create-post");
  const menu = document.getElementById("speed-dial-menu-dropdown");

  if (newPostBtn) {
    newPostBtn.addEventListener("mouseover", () => {
      if (menu) menu.classList.remove("hidden");
    });
    newPostBtn.addEventListener("mouseout", () => {
      if (menu) menu.classList.add("hidden");
    });
  }

  newPostBtn.addEventListener("click", () => createNewPost());
}
