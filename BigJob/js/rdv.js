document.addEventListener("DOMContentLoaded", function () {
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!currentUser) {
        alert("Vous devez être connecté pour voir et prendre des RDV.");
        window.location.href = "index.html";
        return;
    }

   
    let users = JSON.parse(localStorage.getItem("usersData")) || [];
    let user = users.find(u => u.email === currentUser.email);

    if (!user) {
        
        user = { email: currentUser.email, rdv: [] };
        users.push(user);
    }

   
    document.getElementById("validerPresence").addEventListener("click", function () {
        let date = document.getElementById("datePresence").value;
        let today = new Date().toISOString().split("T")[0];

        if (date < today) {
            alert("Impossible de sélectionner une date passée !");
            return;
        }

       
        user.rdv.push({ id: Date.now(), date: date, statut: "En attente" });

        // localStorage
        localStorage.setItem("usersData", JSON.stringify(users));

        alert("Demande envoyée !");
        location.reload();
    });

    
    let table = document.getElementById("tableDemandesUser");
    table.innerHTML = "";

    user.rdv.forEach(rdv => {
        let row = table.insertRow();
        row.insertCell(0).textContent = rdv.date;
        row.insertCell(1).textContent = rdv.statut;
    });
});
