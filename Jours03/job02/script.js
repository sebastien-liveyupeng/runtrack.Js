const container = document.getElementById("container");
const message = document.getElementById("message");
const shuffleButton = document.getElementById("shuffleButton");
const pieces = Array.from(document.querySelectorAll(".piece"));

function shuffle() {
    let shuffled = [...pieces];
    do {
        shuffled.sort(() => Math.random() - 0.5);
    } while (shuffled.map(img => img.dataset.id).join() === pieces.map(img => img.dataset.id).join());
    
    shuffled.forEach(img => container.appendChild(img));
}

function dragStart(event) {
    event.dataTransfer.setData("text", event.target.dataset.id);
    event.target.classList.add("dragging");
}

function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    let draggedId = event.dataTransfer.getData("text");
    let targetId = event.target.dataset.id;
    let draggedEl = document.querySelector(`[data-id='${draggedId}']`);
    let targetEl = document.querySelector(`[data-id='${targetId}']`);
    
    let draggedIndex = pieces.indexOf(draggedEl);
    let targetIndex = pieces.indexOf(targetEl);
    
    [pieces[draggedIndex], pieces[targetIndex]] = [pieces[targetIndex], pieces[draggedIndex]];
    
    pieces.forEach(img => container.appendChild(img));
    checkWin();
}

function dragEnd(event) {
    event.target.classList.remove("dragging");
}

function checkWin() {
    if (pieces.map(img => img.dataset.id).join() === "1,2,3,4,5,6") {
        message.textContent = "Vous avez gagné !";
        message.style.color = "green";
    } else {
        message.textContent = "Vous avez perdu !";
        message.style.color = "red";
    }
}

pieces.forEach(img => {
    img.addEventListener("dragstart", dragStart);
    img.addEventListener("dragover", dragOver);
    img.addEventListener("drop", drop);
    img.addEventListener("dragend", dragEnd);
});

shuffleButton.addEventListener("click", shuffle);