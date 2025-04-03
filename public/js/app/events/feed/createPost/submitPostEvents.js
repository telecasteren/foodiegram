import { userMessage } from "/js/utils/messages/userMessage.js";
import { createSingleCard } from "/js/app/routes/feed/cards/createSingleCard.js";
import { posts } from "/js/utils/source/posts/posts.js";
import { userLookup } from "/js/utils/source/posts/posts.js";

export function submitPost() {
  const submitBtn = document.getElementById("submit-btn");
  const cardContainer = document.getElementById("card-container");

  if (!submitBtn || !cardContainer) return;

  submitBtn.removeEventListener("click", submitHandler);
  submitBtn.addEventListener("click", submitHandler);
}

function submitHandler(event) {
  if (event) event.preventDefault();

  const postImage = document.querySelector("img[alt='New post-image']");
  const title = document.getElementById("title");
  const caption = document.getElementById("caption");

  if (!postImage.src || !caption.value.trim()) {
    userMessage("warning", "Please upload an image and write a caption!");
    return;
  }

  // Convert image to from blob to string
  fetch(postImage.src)
    .then((res) => res.blob())
    .then((blob) => {
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64Image = reader.result;

        const newPost = {
          id: posts.length + 1,
          title: title ? title.value.trim() : "New Post",
          imgSrc: base64Image,
          imgAlt: `Post image titled: ${
            title ? title.value.trim() : "New Post"
          }`,
          caption: caption.value.trim(),
          text: 0,
          likes: 0,
          username: userLookup[3].username || "Unknown user",
          userId: 5,
          createdAt: new Date(),
          comments: [],
        };
        posts.unshift(newPost);
        localStorage.setItem("posts", JSON.stringify(posts));

        const cardContainer = document.getElementById("card-container");
        if (!cardContainer) {
          userMessage("error", "Couldn't create post.");
          return;
        }
        const newPostCard = createSingleCard(newPost);
        cardContainer.appendChild(newPostCard);
      };
    })
    .catch((error) => console.error("Error when converting image:", error));
}
