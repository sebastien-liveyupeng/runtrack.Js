document.addEventListener("DOMContentLoaded", function () {
    let users = JSON.parse(localStorage.getItem("users")) || [];

   
    let adminExists = users.some(user => user.email === "sebastien.live-yu-peng@laplateforme.io");

    if (!adminExists) {
        let adminUser = {
            email: "sebastien.live-yu-peng@laplateforme.io",
            nom: "Live yu peng",
            prenom: "Sebastien",
            password: "1234",
            role: "admin"
        };
        users.push(adminUser);
        localStorage.setItem("users", JSON.stringify(users));
        console.log("✅ Administrateur ajouté !");
    }


    let loginForm = document.querySelector("#loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let email = document.getElementById("emailLogin").value.trim();
            let password = document.getElementById("passwordLogin").value.trim();

            console.log("📩 Tentative de connexion :", email);

            let user = users.find(u => u.email === email && u.password === password);

            if (user) {
                console.log("✅ Connexion réussie :", user);
                localStorage.setItem("currentUser", JSON.stringify(user));

                
                if (user.role === "admin") {
                    window.location.href = "admin.html"; 
                } else {
                    window.location.href = "rdv.html"; 
                }
            } else {
                console.log("❌ Échec de connexion : Email ou mot de passe incorrect.");
                alert("Email ou mot de passe incorrect.");
            }
        });
    }
});
