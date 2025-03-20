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

        fetch("users.json")
            .then(response => response.json())
            .then(data => {
                let users = data.users;

                if (users.some(user => user.email === email)) {
                    alert("Un compte avec cet email existe déjà !");
                    return;
                }

                users.push(newUser);
                return fetch("users.json", {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ users })
                });
            })
            .then(() => {
                alert("Inscription réussie !");
                window.location.href = "rdv.html";
            })
            .catch(error => console.error("Erreur :", error));
    });
});
