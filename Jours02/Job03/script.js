let count = 0;

function addOne() {
    count++;
    document.getElementById("compteur").textContent = count;
}

document.getElementById("button").addEventListener("click", addOne);
