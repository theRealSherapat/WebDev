<?php
$db = new SQLite3("db/blogg.db");
?>

<!DOCTYPE html>
<html>
<head>
  <link href="css/style.css" type="text/css" rel="stylesheet">
  <link rel="shortcut icon" type="image/x-icon" href="img/logo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kategori</title>
</head>
<body>
  <?php include "header.php"; ?>
  <div class="container">
    <?php

    if (isset($_GET["kat_id"])) { // sjekk om variabelen finnes
      $id = $_GET["kat_id"]; // $id brukes videre
    } else
    {  die("Id må angis."); }

    $sporring = "SELECT * FROM innlegg where kat_id='$id'";
    $resultat = $db->query($sporring);
    while ($rad = $resultat->fetchArray())  {
      $innlegg_id = $rad["innlegg_id"];
      $tittel = $rad["tittel"];
      $dato = $rad["dato"];
      $bilde = $rad["bilde"];
      $innlegg = $rad["innlegg"];
      echo "
      <div class='innlegg'>
      <div>
      <a href='kommentar.php?innlegg_id=$innlegg_id'>
      <h1>$tittel</h1>
      <h5>$dato</h5>
      <img src=$bilde>
      <p>$innlegg</p>
      </a>
      </div>
      </div>
      ";
    }

    ?>
  </div>
</body>
</html>
