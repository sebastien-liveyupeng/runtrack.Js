document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("inscriptionForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let nom = document.getElementById("name").value.trim();
        let prenom = document.getElementById("firstname").value.trim();
        let password = document.getElementById("password").value.trim();

        console.log("Valeurs récupérées :", { email, nom, prenom, password });

        if (!email.endsWith("@laplateforme.io")) {
            alert("Seuls les membres de La Plateforme_ peuvent s'inscrire.");
            return;
        }

        let newUser = { email, nom, prenom, password, role: "utilisateur" };

        let users = JSON.parse(localStorage.getItem("users")) || [];
        console.log("Avant ajout :", users);

       
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify(users));

        console.log("Après ajout :", JSON.parse(localStorage.getItem("users"))); // Vérification après stockage

        alert("Inscription réussie !");
        window.location.href = "rdv.html";
    });
});
