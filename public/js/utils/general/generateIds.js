// Simulate MongoDB's ObjectId to create unique id's
export function generateObjectId() {
  return (
    Math.floor(Date.now() / 1000).toString(16) +
    "xxxxxxxxxxxxxxxx".replace(/[x]/g, () =>
      ((Math.random() * 16) | 0).toString(16)
    )
  ).slice(0, 24);
}
