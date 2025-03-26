export function updateUnderline(targetLi) {
  const ulEl = document.querySelector("ul.active");
  if (!ulEl) return;

  const underlineLeft = parseFloat(
    getComputedStyle(ulEl).getPropertyValue("--underline-left") || "0"
  );
  const underlineWidth = parseFloat(
    getComputedStyle(ulEl).getPropertyValue("--underline-width") || "0"
  );

  const { offsetLeft: targetLeft, offsetWidth: targetWidth } = targetLi;

  let startTime = null;
  function steps(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / 300, 1);

    const newLeft = underlineLeft + (targetLeft - underlineLeft) * progress;
    const newWidth = underlineWidth + (targetWidth - underlineWidth) * progress;

    ulEl.style.setProperty("--underline-left", `${newLeft}px`);
    ulEl.style.setProperty("--underline-width", `${newWidth}px`);

    if (progress < 1) {
      requestAnimationFrame(steps);
    }
  }

  requestAnimationFrame(steps);
}

export function initialUnderline(links) {
  const currentPath = window.location.pathname;
  const activeIndex = links.findIndex((link) => link.href === currentPath);
  const liElements = document.querySelectorAll("ul.active li");

  if (activeIndex !== -1 && liElements.length > 0) {
    updateUnderline(liElements[activeIndex]);
  }
}
