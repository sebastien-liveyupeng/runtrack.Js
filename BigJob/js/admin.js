document.addEventListener("DOMContentLoaded", function () {
    let currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

    if (!currentUser || currentUser.role !== "admin") {
        alert("Accès refusé.");
        window.location.href = "index.html";
        return;
    }

    let users = JSON.parse(localStorage.getItem("usersData")) || [];

    let table = document.getElementById("tableDemandesAdmin");
    table.innerHTML = "";

    users.forEach(user => {
        if (!user.rdv || user.rdv.length === 0) return;

        user.rdv.forEach((rdv, index) => {
            let row = table.insertRow();
            row.insertCell(0).textContent = user.nom + " " + user.prenom;
            row.insertCell(1).textContent = user.email;
            row.insertCell(2).textContent = rdv.date;
            row.insertCell(3).textContent = rdv.statut;

            let cellAction = row.insertCell(4);
            if (rdv.statut === "En attente") {
                let btnAccepter = document.createElement("button");
                btnAccepter.textContent = "Accepter";
                btnAccepter.classList.add("btn", "btn-success", "m-1");
                btnAccepter.onclick = function () {
                    user.rdv[index].statut = "Accepté";
                    localStorage.setItem("usersData", JSON.stringify(users));
                    location.reload();
                };

                let btnRefuser = document.createElement("button");
                btnRefuser.textContent = "Refuser";
                btnRefuser.classList.add("btn", "btn-danger", "m-1");
                btnRefuser.onclick = function () {
                    user.rdv[index].statut = "Refusé";
                    localStorage.setItem("usersData", JSON.stringify(users));
                    location.reload();
                };

                cellAction.appendChild(btnAccepter);
                cellAction.appendChild(btnRefuser);
            } else {
                cellAction.textContent = "Décision prise";
            }
        });
    });
});
