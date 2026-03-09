const updateContentButton = document.getElementById("updateContentBtn");
const dynamicContentDiv = document.getElementById("dynamicContent");

updateContentButton.addEventListener("click", () => {
    dynamicContentDiv.innerHTML = "<p>Tejeswari chandanapalli!</p>";
});

const elementsContainer = document.getElementById('elementsContainer');
const createElementBtn = document.getElementById('createElementBtn');

createElementBtn.addEventListener('click', () => {
    const newParagraph = document.createElement('p');
    newParagraph.textContent = `Dynamically created element`;
    elementsContainer.appendChild(newParagraph);
});
deleteFirstElementBtn.addEventListener('click', () => {
    if (elementsContainer.children.length > 0) {
        elementsContainer.removeChild(elementsContainer.children[0]);
    }
});
