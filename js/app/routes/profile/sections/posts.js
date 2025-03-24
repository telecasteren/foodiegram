import { posts } from "/js/utils/source/posts/posts.js";
import { users } from "/js/utils/source/users/users.js";

const postsLookup = posts.reduce((acc, post) => {
  if (!acc[post.userId]) {
    acc[post.userId] = [];
  }
  acc[post.userId].push(post);
  return acc;
}, {});

export default function Posts() {
  const postsList = document.createElement("div");
  postsList.className =
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 mt-10";

  posts.forEach((post) => {
    const postContainer = document.createElement("div");
    postContainer.className =
      "relative w-full h-48 flex justify-center items-center cursor-pointer";

    const statsWrapper = document.createElement("div");
    statsWrapper.className =
      "absolute justify-center flex flex-wrap gap-2 bg-white text-black rounded-md p-1";

    const likes = document.createElement("div");
    const numOfLikes = post.likes ? post.likes.length : 0;
    likes.innerText = `♥️ ${numOfLikes} Likes`;
    statsWrapper.appendChild(likes);

    const comments = document.createElement("div");
    const numOfComments = post.comments ? post.comments.length : 0;
    comments.innerText = `💬 ${numOfComments} Comments`;
    statsWrapper.appendChild(comments);

    const postImage = document.createElement("img");
    postImage.src = post.imgSrc;
    postImage.alt = post.imgAlt;
    postImage.className = `w-full h-full object-cover rounded-sm
    hover:scale-105 md:hover:bg-black md:hover:opacity-50 transition-transform duration-300`;

    postContainer.appendChild(postImage);
    postContainer.appendChild(statsWrapper);
    postsList.appendChild(postContainer);
  });

  users.forEach((user) => {
    console.log(`Posts by ${user.username}:`, postsLookup[user.id]);
  });

  return postsList;
}
