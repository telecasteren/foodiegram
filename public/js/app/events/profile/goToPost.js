export function openPost() {
  const posts = document.querySelectorAll(".user-post");

  posts.forEach((post) => {
    post.addEventListener("click", () => {
      const postId = post.dataset.id;
      console.log("Clicked post ID:", postId);
      if (postId) {
        window.location.href = `/user/post/?id=${postId}`;
      }
    });
  });
}
