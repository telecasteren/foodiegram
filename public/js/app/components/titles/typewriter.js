export function typeTitle(text) {
  const title = document.createElement("h1");
  title.className = "text-center dark:text-darkText font-brand";

  const dot = document.createElement("span");
  dot.style.color = "var(--accent)";
  dot.textContent = ".";

  let index = 0;
  function typeLetters() {
    if (index < text.length) {
      title.textContent += text.charAt(index);
      index++;
      setTimeout(typeLetters, 100);
    } else if (index === text.length) {
      title.appendChild(dot);
    }
  }

  typeLetters();

  setTimeout(() => {
    title.style.border = "transparent";
  }, 3000);

  return title;
}

export function typeText() {
  const title = document.createElement("h2");
  title.className = "text-center dark:text-darkText font-typewriter typewriter";

  const texts = [
    "Want to experience the world of food?",
    "Got any favourite food spots to share?",
    "Connect with fellow foodies from around the world!",
  ];

  let textIndex = 0;
  let charIndex = 0;
  let isErasing = false;

  function typeEffect() {
    const currentText = texts[textIndex];
    const visibleText = currentText.slice(0, charIndex);

    title.textContent = visibleText;

    if (!isErasing && charIndex < currentText.length) {
      charIndex++;
      setTimeout(typeEffect, 100);
    } else if (isErasing && charIndex > 0) {
      charIndex--;
      setTimeout(typeEffect, 50);
    } else {
      if (!isErasing) {
        if (textIndex === texts.length - 1) {
          return;
        }
        isErasing = true;
        setTimeout(typeEffect, 1000);
      } else {
        if (textIndex === texts.length - 1) {
          return;
        }
        isErasing = false;
        textIndex++;
        setTimeout(typeEffect, 500);
      }
    }
  }

  typeEffect();
  return title;
}
