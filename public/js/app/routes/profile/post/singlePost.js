import { posts } from "/js/utils/source/posts/posts.js";
import { userLookup } from "/js/utils/source/users/users.js";
import { dateBadge } from "/js/app/routes/profile/post/createBadge.js";
import Comments from "/js/app/routes/profile/post/comments.js";

export default function SinglePost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get("id"));
  const post = posts.find((p) => p.id == postId);
  const postAuthor = userLookup[post.userId];

  const cardContainer = document.createElement("div");
  cardContainer.className = "flex flex-column flex-wrap justify-center mt-5";

  const card = document.createElement("div");
  card.className = `max-w-sm w-full bg-white border border-gray-200 rounded-l-sm
    shadow-sm dark:bg-[#0f0c29] dark:border-none`;

  const image = document.createElement("img");
  image.className = "rounded-l-sm w-full h-68 object-cover";
  image.src = post.imgSrc;
  image.alt = post.imgAlt;

  const contentDiv = document.createElement("div");
  contentDiv.className = "p-5";

  const userContainer = document.createElement("div");
  userContainer.className = "flex flex-wrap items-center gap-2 mb-2";

  const authorIMG = document.createElement("img");
  authorIMG.setAttribute("data-userId", postAuthor.id);
  authorIMG.className =
    "w-8 h-8 rounded-full border border-accent-light dark:border-accent-dark";
  authorIMG.src = postAuthor.avatarSrc;
  authorIMG.alt = postAuthor.avatarAlt;

  const linkTitle = document.createElement("a");
  linkTitle.href = "/user/profile/";
  const authorName = document.createElement("h5");
  authorName.setAttribute("data-userId", postAuthor.id);
  authorName.className = `text-2xl tracking-tight text-gray-900 dark:text-gray-200
  hover:text-accent-light hover:dark:text-accent-dark`;
  authorName.textContent = post.username;
  linkTitle.appendChild(authorName);

  const title = document.createElement("h5");
  title.className =
    "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
  title.textContent = post.title;

  const paragraph = document.createElement("p");
  paragraph.className = "mb-3 font-normal text-gray-700 dark:text-gray-400";
  paragraph.textContent = post.caption;

  userContainer.appendChild(authorIMG);
  userContainer.appendChild(linkTitle);
  contentDiv.appendChild(userContainer);
  contentDiv.appendChild(title);
  contentDiv.appendChild(paragraph);

  if (post.createdAt) {
    const createdDate = dateBadge(
      new Date(post.createdAt),
      "gray-100",
      "gray-100",
      "gray-500"
    );
    contentDiv.appendChild(createdDate);
  }

  const commentSection = document.createElement("div");
  commentSection.className = `border border-solid border-gray-200 dark:border-[#0f0c29]
  pt-8 pr-5 pb-5 pl-5 w-96 rounded-r-sm`;

  const comment = Comments();
  commentSection.appendChild(comment);

  card.appendChild(image);
  card.appendChild(contentDiv);
  cardContainer.appendChild(card);
  cardContainer.appendChild(commentSection);

  return cardContainer;
}
