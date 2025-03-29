import setTheme from "/js/utils/theme/colorMode.js";
import Navbar from "/js/app/components/navbar/navbar.js";
import Footer from "/js/app/components/footer/footer.js";
import renderContent from "/js/app/ui/renderContent.js";

document.addEventListener("DOMContentLoaded", () => {
  // RENDER TOP CONTENT:
  setTheme();
  Navbar();

  // RENDER MAIN CONTENT:
  renderContent();

  // RENDER BOTTOM CONTENT:
  Footer();

  // Load posts from localStorage
  function loadPosts() {
    const storedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    const cardContainer = document.getElementById("card-container");

    storedPosts.forEach((post) => {
      const postCard = createSingleCard(post);
      cardContainer.appendChild(postCard);
    });
  }
  document.addEventListener("DOMContentLoaded", loadPosts);
});
