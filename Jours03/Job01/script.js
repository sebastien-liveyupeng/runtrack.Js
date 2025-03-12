const button = document.getElementById('montrerbutton');/*pour le button*/
const texte = document.getElementById('texte');/*pour le texte*/

button.addEventListener("click", function() { /* function pour afficher et cahcer texte*/
    const isHidden = texte.style.display === "none"; /* pour cacher le text si*/ 
    texte.style.display = isHidden ? "block" : "none";/* */
    button.textContent = isHidden ? "Cacher la citation" : "Afficher la citation"; /* ensuite montrer ou cacher selon le cas de dessus*/ 
});
