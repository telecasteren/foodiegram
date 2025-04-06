import { createTitle } from "/js/app/components/titles/title.js";
import searchInput from "/js/app/components/search/searchInput.js";
import newPostMenu from "/js/app/routes/feed/newPosts/newPostMenu.js";

export default function Feed() {
  const headerContent = document.createElement("div");
  headerContent.className = "feed-header justify-items-center p-8 gap-16";

  const title = createTitle("Feed me");
  title.classList.add("text-bigger", "m-4");

  const searchBar = searchInput();
  const newPost = newPostMenu();

  headerContent.appendChild(title);
  headerContent.appendChild(searchBar);
  headerContent.appendChild(newPost);

  return headerContent;
}
