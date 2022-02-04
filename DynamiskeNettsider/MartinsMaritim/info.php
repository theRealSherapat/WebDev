<?php
$db = new SQLite3("db/maritim.db");
?>

<!DOCTYPE html>
<html>
<head>
  <link href="style.css" type="text/css" rel="stylesheet">
  <link rel="shortcut icon" type="image/x-icon" href="img/ikon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Info</title>
</head>
<body>
  <?php include "header.php"; ?>
  <div class="bedrift">
    <div class="historie">
      <h1>Om Martins Maritim</h1>
      <h4>
        Martins Maritim ligger i Grimstad og driver båtutleie av forskjellige slag.
        Grunnleggeren, Martin Høgsås, grunnla denne bedriften i starten av året 2010.
        Ideen til å lage denne bedriften fikk han da han flyttet til Grimstad,
        og så hvor vakkert det var der. Da han så den lille og koselige byen som lå
        inntil vannet, kunne han ikke tenke seg annet enn å ligge ute på vannet i en båt hele dagen.
        Dette var noe han ville dele med andre.
      </h4>
    </div>
    <div class="kontakt">
      <ul>
        <li>
          <span>Epost</span>: martinsmaritim@gmail.com
        </li>
        <li>
          <span>Tlf</span>: 466 93 129
        </li>
        <li>
          <span>Adresse</span>: Odden 9, 4876 Grimstad
        </li>
      </ul>
    </div>
  </div>
</body>
</html>
