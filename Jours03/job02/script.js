const container = document.getElementById("container");
const message = document.getElementById("message");
const melangerBouton = document.getElementById("melangerBouton");
const pieces = Array.from(document.querySelectorAll(".piece"));

function melanger() {
    let melange = [...pieces];
    do {
        melange.sort(() => Math.random() - 0.5);
    } while (melange.map(img => img.dataset.id).join() === pieces.map(img => img.dataset.id).join());
    
    melange.forEach(img => container.appendChild(img));
}

function debutGlisser(event) {
    event.dataTransfer.setData("text", event.target.dataset.id);
    event.target.classList.add("dragging");
}

function survolGlisser(event) {
    event.preventDefault();
}

function deposer(event) {
    event.preventDefault();
    let idGlisse = event.dataTransfer.getData("text");
    let idCible = event.target.dataset.id;
    let elementGlisse = document.querySelector(`[data-id='${idGlisse}']`);
    let elementCible = document.querySelector(`[data-id='${idCible}']`);
    
    let indexGlisse = pieces.indexOf(elementGlisse);
    let indexCible = pieces.indexOf(elementCible);
    
    [pieces[indexGlisse], pieces[indexCible]] = [pieces[indexCible], pieces[indexGlisse]];
    
    pieces.forEach(img => container.appendChild(img));
    verifierGagne();
}

function finGlisser(event) {
    event.target.classList.remove("dragging");
}

function verifierGagne() {
    if (pieces.map(img => img.dataset.id).join() === "1,2,3,4,5,6") {
        message.textContent = "Vous avez gagné !";
        message.style.color = "green";
    } else {
        message.textContent = "Vous avez perdu !";
        message.style.color = "red";
    }
}

pieces.forEach(img => {
    img.addEventListener("dragstart", debutGlisser);
    img.addEventListener("dragover", survolGlisser);
    img.addEventListener("drop", deposer);
    img.addEventListener("dragend", finGlisser);
});

melangerBouton.addEventListener("click", melanger);