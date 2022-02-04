<?php
$db = new SQLite3("db/blogg.db");

if (isset($_GET["innlegg_id"])) { // sjekk om variabelen finnes
  $innlegg_id = $_GET["innlegg_id"]; // $id brukes videre
} else {
  die("Id må angis.");
}

?>
<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["kommenter"])
) {
  $bruker = $_POST["bruker"];
  $kommentar = $_POST["kommentar"];
  $sporring = "INSERT INTO kommentar(bruker,dato,kommentar,innlegg_id) VALUES('$bruker',date('now'),'$kommentar','$innlegg_id')";
  if (!$db->query($sporring)) {
    $feil = $db->lastErrorMsg();
    die ("Noe gikk galt med spørringen: $sporring ($feil)");
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <link href="css/style.css" type="text/css" rel="stylesheet">
  <link rel="shortcut icon" type="image/x-icon" href="img/logo.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Kommenter</title>
</head>
<body>
  <?php include "header.php"; ?>
  <div class="container">
      <?php
      $sporring = "SELECT * FROM innlegg WHERE innlegg_id=$innlegg_id";
      $resultat = $db->query($sporring);
      while ($rad = $resultat->fetchArray()) {
        $innlegg_id = $rad["innlegg_id"];
        $tittel = $rad["tittel"];
        $dato = $rad["dato"];
        $bilde = $rad["bilde"];
        $innlegg = $rad["innlegg"];
        echo "<div class='innlegg'>
        <h1>$tittel</h1>
        <h5>$dato</h5>
        <img src=$bilde>
        <p>$innlegg</p>
        </div>
        ";
      }
      ?>
  <div class="comments">
    <div class="kommentar">
      <h1>Kommentarer</h1>
      <?php
      $sporring = "SELECT * FROM kommentar WHERE innlegg_id=$innlegg_id";
      $resultat = $db->query($sporring);
      while ($rad = $resultat->fetchArray()) {
        $kommentar_id = $rad["kommentar_id"];
        $kommentar = $rad["kommentar"];
        $bruker = $rad["bruker"];
        echo "
        <div class='kommentar'>
        <h3>$bruker</h3>
        <h5>$dato</h5>
        $kommentar
        </div>
        ";
      }
      ?>
    </div>
    <div class="kommentar">
      <h1>Kommenter innlegg</h1>
      <form method="POST">
        <label for="bruker">Brukernavn</label>
        <input type="text" name="bruker">
        <label for="kommentar">Kommentar</label>
        <input type='hidden'/>
        <textarea name='kommentar'></textarea><br />
        <input type="submit" value="Kommenter" name="kommenter">
      </form>
    </div>
  </div>
  </div>
</body>
</html>
