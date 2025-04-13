export default function Comments() {
  const container = document.createElement("div");
  container.className = "flex items-start gap-2.5";

  const img = document.createElement("img");
  img.className =
    "w-8 h-8 rounded-full border border-accent-light dark:border-accent-dark";
  img.src = "/resources/images/avatars/jeremy-bishop-_CFv3bntQlQ-unsplash.jpg";
  img.alt = "A man surfing in large wave";

  const textContainer = document.createElement("div");
  textContainer.className = "flex flex-col w-full max-w-[320px] leading-1.5";

  const header = document.createElement("div");
  header.className = "flex items-center space-x-2 rtl:space-x-reverse";

  const nameSpan = document.createElement("span");
  nameSpan.className = "text-sm font-semibold text-gray-900 dark:text-white";
  nameSpan.textContent = "Donnie Green";

  const timeSpan = document.createElement("span");
  timeSpan.className = "text-sm font-normal text-gray-500 dark:text-gray-400";
  timeSpan.textContent = "11:46";

  header.appendChild(nameSpan);
  header.appendChild(timeSpan);

  const message = document.createElement("p");
  message.className = "text-sm font-normal py-2 text-gray-900 dark:text-white";
  message.textContent =
    "That's awesome. It looks really good, and I'm gonna try that recipe.";

  const statusSpan = document.createElement("span");
  statusSpan.className = "text-sm font-normal text-gray-500 dark:text-gray-400";
  statusSpan.textContent = "Delivered";

  textContainer.appendChild(header);
  textContainer.appendChild(message);
  textContainer.appendChild(statusSpan);

  container.appendChild(img);
  container.appendChild(textContainer);

  return container;
}
