document.addEventListener("DOMContentLoaded", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (!currentUser || currentUser.role !== "admin") {
        alert("Accès refusé. Vous devez être administrateur.");
        window.location.href = "index.html";
        return;
    }
});






document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let table = document.getElementById("tableUsers");

    users.forEach((user, index) => {
        let row = table.insertRow();
        row.insertCell(0).textContent = user.email;
        row.insertCell(1).textContent = user.nom;
        row.insertCell(2).textContent = user.prenom;
        row.insertCell(3).textContent = user.role;

        let cellAction = row.insertCell(4);
        cellAction.classList.add("text-center");

// modo
        if (user.role === "utilisateur") {
            let btnMod = document.createElement("button");
            btnMod.textContent = "Promouvoir Modérateur";
            btnMod.classList.add("btn", "btn-success", "m-1");
            btnMod.onclick = function () {
                users[index].role = "modérateur";
                localStorage.setItem("users", JSON.stringify(users));
                location.reload();
            };
            cellAction.appendChild(btnMod);
        }

        // admin
        if (user.role === "modérateur") {
            let btnAdmin = document.createElement("button");
            btnAdmin.textContent = "Promouvoir Admin";
            btnAdmin.classList.add("btn", "btn-danger", "m-1");
            btnAdmin.onclick = function () {
                users[index].role = "admin";
                localStorage.setItem("users", JSON.stringify(users));
                location.reload();
            };
            cellAction.appendChild(btnAdmin);
        }

      
        if (user.role !== "utilisateur") {
            let btnRetrograde = document.createElement("button");
            btnRetrograde.textContent = "Rétrograder";
            btnRetrograde.classList.add("btn", "btn-danger", "m-1");
            btnRetrograde.onclick = function () {
                if (user.role === "admin") {
                    users[index].role = "modérateur";
                } else if (user.role === "modérateur") {
                    users[index].role = "utilisateur";
                }
                localStorage.setItem("users", JSON.stringify(users));
                location.reload();
            };
            cellAction.appendChild(btnRetrograde);
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    /* pour la securite que les admins seulent peuvent rentrer*/
    if (!currentUser || currentUser.role !== "admin") {
        alert("Accès refusé. Vous devez être administrateur.");
        window.location.href = "index.html";
        return;
    }
/* ici on va triater les demandes */
    let demandes = JSON.parse(localStorage.getItem("demandes")) || [];
    let table = document.getElementById("tableDemandesAdmin");

    demandes.forEach((demande, index) => {
        let row = table.insertRow();
        row.insertCell(0).textContent = demande.nom + " " + demande.prenom;
        row.insertCell(1).textContent = demande.utilisateur;
        row.insertCell(2).textContent = demande.date;
        row.insertCell(3).textContent = demande.statut;
        let cellAction = row.insertCell(4);

        if (demande.statut === "En attente") {
            let btnAccepter = document.createElement("button");
            btnAccepter.textContent = "Accepter";
            btnAccepter.classList.add("btn", "btn-success", "m-1");
            btnAccepter.onclick = function () {
                demandes[index].statut = "Accepté";
                localStorage.setItem("demandes", JSON.stringify(demandes));
                location.reload();
            };

            let btnRefuser = document.createElement("button");
            btnRefuser.textContent = "Refuser";
            btnRefuser.classList.add("btn", "btn-danger", "m-1");
            btnRefuser.onclick = function () {
                demandes[index].statut = "Refusé";
                localStorage.setItem("demandes", JSON.stringify(demandes));
                location.reload();
            };

            cellAction.appendChild(btnAccepter);
            cellAction.appendChild(btnRefuser);
        } else {
            cellAction.textContent = " décision finie";
        }
    });
});
