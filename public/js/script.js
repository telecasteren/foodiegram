import setTheme from "/js/utils/theme/colorMode.js";
import Navbar from "/js/app/components/navbar/navbar.js";
import Footer from "/js/app/components/footer/footer.js";
import renderContent from "/js/app/ui/renderContent.js";
import { userMessage } from "/js/utils/messages/userMessage.js";

document.addEventListener("DOMContentLoaded", () => {
  // RENDER TOP CONTENT:
  setTheme();
  Navbar();

  // RENDER MAIN CONTENT:
  renderContent();

  // RENDER BOTTOM CONTENT:
  Footer();

  // TEST userMessage
  // userMessage("info", "This is totally crazy.");
});
