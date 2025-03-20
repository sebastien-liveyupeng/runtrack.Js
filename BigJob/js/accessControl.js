document.addEventListener("DOMContentLoaded", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser && currentUser.role === "admin") {
        let adminDiv = document.getElementById("adminAccess");
        let btnAdmin = document.createElement("a");

        btnAdmin.href = "admin.html";
        btnAdmin.textContent = "Accéder à la gestion des utilisateurs";
        btnAdmin.classList.add("btn", "btn-danger", "mt-2");

        adminDiv.appendChild(btnAdmin);
    }
});
