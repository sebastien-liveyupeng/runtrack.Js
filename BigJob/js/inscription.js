document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("inscriptionForm").addEventListener("submit", function (event) {
        event.preventDefault();

        let email = document.getElementById("email").value.trim();
        let nom = document.getElementById("name").value.trim();
        let prenom = document.getElementById("firstname").value.trim();
        let password = document.getElementById("password").value.trim();

       
        if (!email.endsWith("@laplateforme.io")) {
            alert("Seuls les membres de La Plateforme_ peuvent s'inscrire.");
            return;
        }

        let newUser = { email, nom, prenom, password, role: "utilisateur", rdv: [] };

        // recup localStorage
        let data = JSON.parse(localStorage.getItem("users")) || { users: [] };
        let users = data.users || [];

       
        if (users.some(user => user.email === email)) {
            alert("Un compte avec cet email existe déjà !");
            window.location.href = "index.html";
            return;
        }

       // mets dans local puis affiche en format json en concsol que je peyx recup puis mettre dans mon json
        users.push(newUser);
        localStorage.setItem("users", JSON.stringify({ users }));

        alert("Inscription réussie !");
        window.location.href = "rdv.html";
    });
});
