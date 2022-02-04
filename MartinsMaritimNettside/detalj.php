<?php
$db = new SQLite3("db/maritim.db");

if (isset($_GET["baat_id"])) { // sjekk om variabelen finnes
  $baat_id = $_GET["baat_id"]; // $id brukes videre
} else {
  die("Id må angis.");
}
?>

<!DOCTYPE html>
<html>
<head>
  <link href="style.css" type="text/css" rel="stylesheet">
  <link rel="shortcut icon" type="image/x-icon" href="img/ikon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Mer Info</title>
</head>
<body>
  <?php include "header.php"; ?>
  <div class="container">
    <?php
    $sporring = "SELECT * FROM baat where baat_id=$baat_id";
    $resultat = $db->query($sporring);
    while ($rad = $resultat->fetchArray()) {
      $baat_id = $rad["baat_id"];
      $navn = $rad["navn"];
      $bilde = $rad["bilde"];
      $fot = $rad["fot"];
      $hestekraft = $rad["hestekraft"];
      $maks_passasjer = $rad["maks_passasjer"];
      $time_pris = $rad["time_pris"];
      echo "<div class='innlegg'>
      <div class='detalj'>
      <img src=img/$bilde>
      <h1>$navn</h1>
      <p>Denne båten kan maks ha $maks_passasjer passasjerer</p>
      <p>Båten er $fot fot</p>
      <p>Den har $hestekraft hestekrefter</p>
      <p>Utleieprisen er $time_pris kr per time</p>
      </div></div>";
    }
    ?>
  </div>
</body>
</html>
