//selecting popup box & popup overlay button
var popupoverlay=document.querySelector(".popup-overlay");
// Selecting popup box & popup overlay button
var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var popupbutton = document.getElementById("popup-button");

popupbutton.addEventListener("click", function() {
    popupoverlay.style.display = 'block';
    popupbox.style.display = 'block';
});

// Select cancel button
var cancelbutton = document.getElementById("cancel-book");
cancelbutton.addEventListener("click", function(event) {
    event.preventDefault();
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';
});

// Select container, addbook, book-title-input, book-author-input, book-description-input 
var container = document.querySelector(".container");
var addbook = document.getElementById("add-book");
var booktitle = document.getElementById("book-title-input");
var bookauthor = document.getElementById("book-author-input");
var description = document.getElementById("book-description-input");

addbook.addEventListener("click", function(event) {
    event.preventDefault(); // Ensure form submission is prevented
    
    // Create new book container
    var div = document.createElement("div");
    div.setAttribute("class", "book-container");
    div.innerHTML = `
        <h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${description.value}</p>
        <button onclick="deletebook(event)">Delete</button>
    `;
    
    // Append new book to container
    container.appendChild(div);

    // Clear form and close popup
    booktitle.value = '';
    bookauthor.value = '';
    description.value = '';
    popupoverlay.style.display = 'none';
    popupbox.style.display = 'none';
});

// Function to delete a book
function deletebook(event) {
    event.target.parentElement.remove();
}
