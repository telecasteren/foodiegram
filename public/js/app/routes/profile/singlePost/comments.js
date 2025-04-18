import { posts } from "/js/utils/source/posts/posts.js";
import { userLookup } from "/js/utils/source/users/users.js";
import { formatDate } from "/js/utils/general/formatDate.js";

export default function Comments() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get("id"));
  const post = posts.find((p) => p.id === postId);

  const commentsContainer = document.createElement("div");
  commentsContainer.className = "flex flex-col gap-4";

  if (
    !post ||
    !post.comments ||
    !post.comments.length ||
    !Array.isArray(post.comments)
  ) {
    const info = document.createElement("div");
    info.textContent = "Be the first to comment on this post!";
    info.className =
      "p-2 text-center text-[12px] rounded-sm shadow-xl border border-accent-light dark:border-accent-dark";

    commentsContainer.appendChild(info);

    return commentsContainer;
  }

  post.comments.forEach((comment) => {
    const commentAuthor = userLookup[comment.userId];

    const container = document.createElement("div");
    container.className = "flex items-start gap-2.5";

    const img = document.createElement("img");
    img.className =
      "w-8 h-8 rounded-full object-cover border border-accent-light dark:border-accent-dark";
    img.src = commentAuthor.avatarSrc || "No image found.";
    img.alt = commentAuthor.avatarAlt || "";

    const textContainer = document.createElement("div");
    textContainer.className = "flex flex-col w-full max-w-[320px] leading-1.5";

    const header = document.createElement("div");
    header.className = "flex items-center space-x-2 rtl:space-x-reverse";

    const nameSpan = document.createElement("span");
    nameSpan.className = "text-sm font-semibold text-gray-900 dark:text-white";
    nameSpan.textContent = comment.username;
    header.appendChild(nameSpan);

    const timeSpan = document.createElement("span");
    timeSpan.className =
      "text-tiny font-normal text-gray-500 dark:text-gray-400";
    timeSpan.textContent = `Delivered ${formatDate(comment.createdAt)}`;

    const message = document.createElement("p");
    message.className =
      "text-sm font-normal py-2 text-gray-900 dark:text-white";
    message.textContent = comment.text;

    textContainer.appendChild(header);
    textContainer.appendChild(message);
    textContainer.appendChild(timeSpan);

    container.appendChild(img);
    container.appendChild(textContainer);

    commentsContainer.appendChild(container);
  });

  return commentsContainer;
}
