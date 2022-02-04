<?php
$db = new SQLite3("db/maritim.db");
?>

<!DOCTYPE html>
<html>
<head>
  <link href="style.css" type="text/css" rel="stylesheet">
  <link rel="shortcut icon" type="image/x-icon" href="img/ikon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hovedside</title>
</head>
<body>
  <?php include "header.php"; ?>
  <div class="container">
    <?php
    $sporring = "SELECT * FROM baat order by baat_id DESC";
    $resultat = $db->query($sporring);
    while ($rad = $resultat->fetchArray()) {
      $baat_id = $rad["baat_id"];
      $navn = $rad["navn"];
      $bilde = $rad["bilde"];
      $maks_passasjer = $rad["maks_passasjer"];
      $time_pris = $rad["time_pris"];
      echo "
      <a href='detalj.php?baat_id=$baat_id'>
      <div class='innlegg'>
      <div class='links'>
      <img src=img/$bilde>
      <div class='infobox'>
      <h1>$navn</h1>
      <h3>$time_pris kr per time</h3>
      <p>Maks $maks_passasjer passasjerer</p>
      </div></div></div></a>";
    }
    ?>
  </div>
</body>
</html>
