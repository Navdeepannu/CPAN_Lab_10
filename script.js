document.addEventListener("DOMContentLoaded", function() {
    // Change background color of body to a random color when page is loaded
    document.body.style.backgroundColor = getRandomColor();

    // Append a new <p> element to the <div> with id "container" when page is loaded
    var container = document.getElementById("container");
    var newParagraph = document.createElement("p");
    newParagraph.textContent = "New paragraph added dynamically!";
    container.appendChild(newParagraph);

    // Add event listener to the button to change text of paragraph when clicked
    var changeTextBtn = document.getElementById("changeTextBtn");
    changeTextBtn.addEventListener("click", function() {
        var messageParagraph = document.getElementById("message");
        messageParagraph.textContent = "Text changed successfully!";
    });
});

// Function to generate random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
