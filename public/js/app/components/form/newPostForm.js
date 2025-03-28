const sharedStyles = `block w-[80%] cursor-pointer text-sm text-gray-900 border 
border-gray-300 rounded-lg bg-gray-50 placeholder-gray-800
focus:ring-blue-500 focus:border-blue-500`;

export default function newPost() {
  const form = document.createElement("form");
  form.className = "p-4 md:p-5";

  const grid = document.createElement("div");
  grid.className = "grid gap-4 mb-4";

  const formTitle = document.createElement("h3");
  formTitle.className = "text-lg font-semibold text-black";
  formTitle.textContent = "Create new post.";

  const uploadWrapper = document.createElement("div");

  const label = document.createElement("label");
  label.className = "block mb-2 text-sm font-medium text-gray-900";
  label.setAttribute("for", "file_input");
  label.textContent = "Upload image:";

  const imgInput = document.createElement("input");
  imgInput.setAttribute("aria-describedby", "file_input_help");
  imgInput.id = "file_input";
  imgInput.type = "file";
  imgInput.accept = "image/*";
  imgInput.className = `${sharedStyles} p-1`;

  const helpText = document.createElement("p");
  helpText.className = "mt-1 text-sm text-gray-500 dark:text-gray-300";
  helpText.id = "file_input_help";
  helpText.textContent = "SVG, PNG, JPG or GIF (MAX. 800x400px).";

  const postImage = document.createElement("img");
  postImage.alt = "New post-image";
  postImage.className =
    "w-full max-w-md h-auto max-h-[500px] object-contain rounded-lg hidden";

  imgInput.addEventListener("change", (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      postImage.src = imageUrl;
      postImage.classList.remove("hidden");
      imgInput.classList.add("hidden");
    }
  });

  uploadWrapper.appendChild(label);
  uploadWrapper.appendChild(imgInput);
  uploadWrapper.appendChild(helpText);

  const captionWrapper = document.createElement("div");

  const captionLabel = document.createElement("label");
  captionLabel.className = "block mb-2 text-sm font-medium text-gray-900";
  captionLabel.setAttribute("for", "caption");
  captionLabel.textContent = "Post caption:";

  const caption = document.createElement("textarea");
  caption.name = "caption";
  caption.id = "caption";
  caption.className = `${sharedStyles} p-4 ps-10`;
  caption.maxLength = "180";
  caption.rows = 4;

  grid.appendChild(uploadWrapper);
  grid.appendChild(postImage);
  captionWrapper.appendChild(captionLabel);
  captionWrapper.appendChild(caption);
  grid.appendChild(captionWrapper);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.className = `text-text-light inline-flex items-center
  bg-accent-light dark:bg-accent-dark hover:brightness-110 focus:ring-2 focus:outline-none focus:ring-blue-300
  font-medium rounded-lg text-sm px-5 py-2.5 text-center`;

  submitButton.innerHTML =
    '<svg class="me-1 -ms-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg> Submit post.';

  form.appendChild(formTitle);
  form.appendChild(grid);
  form.appendChild(submitButton);

  return form;
}
