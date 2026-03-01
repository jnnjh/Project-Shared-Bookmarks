function displayBookmarks(userId) {
  bookmarkList.innerHTML = "";

  const bookmarks = getData(userId) || [];

  if (bookmarks.length === 0) {
    emptyMessage.hidden = false;
    return;
  }

  emptyMessage.hidden = true;

  // Reverse chronological order
  const sortedBookmarks = [...bookmarks].sort(
    (a, b) => b.createdAt - a.createdAt
  );

  sortedBookmarks.forEach(bookmark => {
    const li = document.createElement("li");

    const title = document.createElement("a");
    title.href = bookmark.url;
    title.textContent = bookmark.title;
    title.target = "_blank";

    const description = document.createElement("p");
    description.textContent = bookmark.description;

    const timestamp = document.createElement("time");
    timestamp.textContent = new Date(
      bookmark.createdAt
    ).toLocaleString();

    li.append(title, description, timestamp);
    bookmarkList.appendChild(li);
  });
}

