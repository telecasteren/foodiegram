import { posts } from "/js/utils/source/posts/posts.js";

export function createCards() {
  const cardContainer = document.createElement("div");
  cardContainer.className =
    "flex flex-column flex-wrap gap-4 sm:gap-6 lg:gap-16 justify-center m-20";

  posts.forEach((post) => {
    const card = document.createElement("div");
    card.setAttribute("data-id", post.id);
    card.className = `max-w-sm w-80 bg-white border border-gray-200 rounded-lg
    shadow-sm dark:bg-[#0f0c29] dark:border-none hover:scale-105 transition-transform duration-300`;

    const linkImage = document.createElement("a");
    linkImage.href = "#";
    const image = document.createElement("img");
    image.className = "rounded-t-lg w-full h-48 object-cover";
    image.src = post.imgSrc;
    image.alt = post.imgAlt;
    linkImage.appendChild(image);

    const contentDiv = document.createElement("div");
    contentDiv.className = "p-5";

    const authorName = document.createElement("h5");
    authorName.className =
      "mb-2 text-2xl font-bold tracking-tight text-accent-light dark:text-accent-dark";
    authorName.textContent = post.username;

    const linkTitle = document.createElement("a");
    linkTitle.href = "#";
    const title = document.createElement("h5");
    title.className =
      "mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white";
    title.textContent = post.title;
    linkTitle.appendChild(title);

    const paragraph = document.createElement("p");
    paragraph.className = "mb-3 font-normal text-gray-700 dark:text-gray-400";
    paragraph.textContent = post.caption;

    contentDiv.appendChild(authorName);
    contentDiv.appendChild(linkTitle);
    contentDiv.appendChild(paragraph);

    card.appendChild(linkImage);
    card.appendChild(contentDiv);

    cardContainer.appendChild(card);
  });

  return cardContainer;
}
