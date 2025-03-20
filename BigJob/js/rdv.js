document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("validerPresence").addEventListener("click", function () {
        let date = document.getElementById("datePresence").value;
        let today = new Date().toISOString().split("T")[0];

        if (date < today) {
            alert("Impossible de sélectionner une date passée !");
            return;
        }

        let demandes = JSON.parse(localStorage.getItem("demandes")) || [];
        let currentUser = JSON.parse(localStorage.getItem("currentUser"));

        if (!currentUser) {
            alert("Vous devez être connecté pour faire une demande.");
            return;
        }

        let nouvelleDemande = {
            utilisateur: currentUser.email,
            nom: currentUser.nom,
            prenom: currentUser.prenom,
            date: date,
            statut: "En attente"
        };

        demandes.push(nouvelleDemande);
        localStorage.setItem("demandes", JSON.stringify(demandes));

        alert("Demande envoyée !");
        location.reload();
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Vous devez être connecté pour voir vos demandes.");
        window.location.href = "index.html";
        return;
    }

    let demandes = JSON.parse(localStorage.getItem("demandes")) || [];
    let table = document.getElementById("tableDemandesUser");

    demandes.forEach(demande => {
        if (demande.utilisateur === currentUser.email) {
            let row = table.insertRow();
            row.insertCell(0).textContent = demande.date;
            row.insertCell(1).textContent = demande.statut;
        }
    });
});

