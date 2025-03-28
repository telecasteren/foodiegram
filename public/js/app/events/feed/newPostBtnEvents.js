import { popUpModal } from "/js/app/components/modal/createModal.js";

function createNewPost() {
  popUpModal();
}

export function newPostBtnEvents() {
  const newPostBtn = document.getElementById("create-post");

  if (newPostBtn) {
    newPostBtn.addEventListener("mouseover", () => {
      const menu = document.getElementById("speed-dial-menu-dropdown");

      if (menu) {
        menu.classList.remove("hidden");
        menu.addEventListener("click", () => createNewPost());
      }

      document.addEventListener("click", (e) => {
        if (!menu.contains(e.target) && !newPostBtn.contains(e.target)) {
          menu.classList.add("hidden");
        }
      });
    });
  }
}
