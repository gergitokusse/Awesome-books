const bookList = document.getElementById("book-list");
const bookTitleInput = document.getElementById("book-title-input");
const authorNameInput = document.getElementById("author-name-input");

function addBook() {
  const bookTitle = bookTitleInput.value.trim();
  const authorName = authorNameInput.value.trim();

  if (bookTitle === "" || authorName === "") {
    alert("Please enter a book title and author name");
    return;
  }

  const bookItem = document.createElement("li");
  const bookTitleText = document.createTextNode(bookTitle);
  const authorNameText = document.createTextNode(` by ${authorName}`);
  const removeButton = document.createElement("button");
  const removeText = document.createTextNode("Remove");
  removeButton.appendChild(removeText);
  removeButton.addEventListener("click", function () {
    bookItem.remove();
  });

  bookItem.appendChild(bookTitleText);
  bookItem.appendChild(authorNameText);
  bookItem.appendChild(removeButton);
  bookList.appendChild(bookItem);

  bookTitleInput.value = "";
  authorNameInput.value = "";
}
