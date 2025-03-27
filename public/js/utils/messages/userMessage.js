export function userMessage(type, message) {
  const alertTypes = {
    info: {
      text: "text-blue-800",
      bg: "bg-blue-50",
      darkText: "dark:text-blue-400",
    },
    error: {
      text: "text-red-800",
      bg: "bg-red-50",
      darkText: "dark:text-red-400",
    },
    success: {
      text: "text-green-800",
      bg: "bg-green-50",
      darkText: "dark:text-green-400",
    },
    warning: {
      text: "text-yellow-800",
      bg: "bg-yellow-50",
      darkText: "dark:text-yellow-300",
    },
    alert: {
      text: "text-gray-800",
      bg: "bg-gray-50",
      darkText: "dark:text-gray-300",
    },
  };

  const { text, bg, darkText } = alertTypes[type] || alertTypes.dark;

  const div = document.createElement("div");
  div.setAttribute("role", "alert");
  div.className = `fixed top-5 left-1/2 transform -translate-x-1/2 w-96 p-4 mb-4
  text-sm ${text} text-center rounded-lg ${bg} dark:bg-gray-800 ${darkText} shadow-lg z-50`;

  const span = document.createElement("span");
  span.className = "font-medium";
  span.textContent = `${type.charAt(0).toUpperCase() + type.slice(1)}! `;

  div.appendChild(span);
  div.appendChild(document.createTextNode(message));

  return div;
}

// Use examples:
// const error = userMessage("error", "An error occurred when fetching material.");
// const alert = userMessage("alert", "Please try again.");
// document.body.prepend(error);
// document.body.prepend(alert);
