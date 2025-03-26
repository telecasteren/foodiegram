import { createTitle } from "/js/app/components/pageTitle/title.js";
import searchInput from "/js/app/components/search/searchInput.js";
import createPostBtn from "/js/app/routes/feed/createPostBtn.js";

export default function Feed() {
  const headerContent = document.createElement("div");
  headerContent.className = "feed-header justify-items-center p-8 gap-16";

  const title = createTitle("Feed me.");
  title.className = "text-bigger m-4";

  const searchBar = searchInput();
  const newPost = createPostBtn();

  headerContent.appendChild(title);
  headerContent.appendChild(searchBar);
  headerContent.appendChild(newPost);

  return headerContent;
}
