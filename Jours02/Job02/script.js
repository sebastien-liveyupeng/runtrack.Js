function showhide() {
    let article = document.getElementById("text"); /*  pour prendre le texte */
    
    if (article.style.display === "none") { 
        article.style.display = "block";/* mettre l'articld en style block*/
    } else {
        article.style.display = "none";
    }
}

document.getElementById("button").addEventListener("click", showhide); /* pour afficher ou cacher l'article au click*/ 