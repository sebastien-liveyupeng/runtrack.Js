<?php
header("Content-Type: application/json");


if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    echo json_encode(["success" => false, "error" => "Méthode invalide"]);
    exit;
}


function validerEmail($email) {
    return filter_var($email, FILTER_VALIDATE_EMAIL);
}


function validerCodePostal($code) {
    return preg_match("/^[0-9]{5}$/", $code);
}


foreach ($_POST as $key => $value) {
    $value = trim($value);

    if (empty($value)) {
        echo json_encode(["success" => false, "error" => "Ce champ est requis."]);
        exit;
    }

    switch ($key) {
        case "nom":
        case "prenom":
            if (!preg_match("/^[a-zA-ZÀ-ÿ\s-]{2,}$/", $value)) {
                echo json_encode(["success" => false, "error" => "Le nom/prénom doit contenir au moins 2 lettres."]);
                exit;
            }
            break;

        case "email":
            if (!validerEmail($value)) {
                echo json_encode(["success" => false, "error" => "Email invalide."]);
                exit;
            }
            break;

        case "motdepasse":
            if (strlen($value) < 6) {
                echo json_encode(["success" => false, "error" => "Le mot de passe doit contenir au moins 6 caractères."]);
                exit;
            }
            break;

        case "code_postal":
            if (!validerCodePostal($value)) {
                echo json_encode(["success" => false, "error" => "Le code postal doit contenir 5 chiffres."]);
                exit;
            }
            break;
    }
}


echo json_encode(["success" => true]);
?>
