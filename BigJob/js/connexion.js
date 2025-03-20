document.addEventListener("DOMContentLoaded", function () {
    fetch("users.json")
        .then(response => response.json())
        .then(data => {
            let users = data.users;

            document.getElementById("loginForm").addEventListener("submit", function (event) {
                event.preventDefault();

                let email = document.getElementById("emailLogin").value.trim();
                let password = document.getElementById("passwordLogin").value.trim();

                let user = users.find(u => u.email === email && u.password === password);

                if (user) {
                  
                    sessionStorage.setItem("currentUser", JSON.stringify({
                        email: user.email,
                        nom: user.nom,
                        prenom: user.prenom,
                        role: user.role,
                        rdv: user.rdv
                    }));

                    if (user.role === "admin") {
                        window.location.href = "admin.html";
                    } else {
                        window.location.href = "rdv.html";
                    }
                } else {
                    alert("Email ou mot de passe incorrect.");
                }
            });
        })
        .catch(error => console.error("Erreur lors du chargement du fichier JSON :", error));
});
