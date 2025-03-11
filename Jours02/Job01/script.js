function citation(){
    let texte = document.getElementById('citation').textContent; /* pour recup le text  */
    console.log(texte);
}

document.getElementById('button').addEventListener('click',citation); /*ensuite pour click dessus le nutton et affihcer le texte */