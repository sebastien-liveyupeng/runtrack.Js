function JsonValueKey(string, key) {
    let json = JSON.parse(string);
    return json[key];
}

let INFO = `{
    "nom": "La Plateforme",
    "adresse": "8 rue Hozier",
    "ville": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log(JsonValueKey(INFO, "ville")); 
