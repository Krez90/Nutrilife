<?php
function open_connexion()
{
  /* On se connecte via PDO, on attrapera les exceptions au besoin afin d'éviter les fuites de données */
    try {
        $bdd = new PDO('mysql:host=localhost;dbname=;charset=utf8', 'root', '');
    } catch (Exception $e) {
        die('Erreur : ' . $e->getMessage());
    }
    return $bdd;
}

function close_connection($bdd)
{
    $bdd = null;
}