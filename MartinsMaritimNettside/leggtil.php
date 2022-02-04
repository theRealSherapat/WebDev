<?php
$db = new SQLite3("db/maritim.db");
?>

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["registrer"])) {
  $navn = $_POST["navn"];
  $kat_id = $_POST["kat_id"];
  $bilde = $_POST["bilde"];
  $fot = $_POST["fot"];
  $hestekraft = $_POST["hestekraft"];
  $maks_passasjer = $_POST["maks_passasjer"];
  $time_pris = $_POST["time_pris"];

  $sporring = "INSERT INTO baat(navn,kat_id,fot,hestekraft,maks_passasjer,time_pris,bilde) VALUES('$navn','$kat_id','$fot','$hestekraft','$maks_passasjer','$time_pris','$bilde')";
  if (!$db->query($sporring)) {
    $feil = $db->lastErrorMsg();
    die ("Noe gikk galt med spørringen: $sporring ($feil)");
  }
}
?>

<!DOCTYPE html>
<html>
<head>
  <link href="style.css" type="text/css" rel="stylesheet">
  <link rel="shortcut icon" type="image/x-icon" href="img/ikon.png" />
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Legg til</title>
</head>
<body>
  <?php include "header.php"; ?>
  <div class="registrer">
    <h1>Legg til båt</h1>
    <form method="POST">
      <label for="navn">Navn</label>
      <input type="text" name="navn">
      <div class="block"><select name="kat_id">
        <option value="">Kategori</option>
        <?php
        $sporring = "SELECT * FROM kategori";
        $resultat = $db->query($sporring);
        while ($rad = $resultat->fetchArray()) {
          $kategori = $rad["kategori"];
          $kat_id = $rad["kat_id"];
          echo "<option value='$kat_id'>$kategori</option>";
        }
        ?>
      </select></div>
      <label for="fot">Lengde</label>
      <input type="text" name="fot" style="width:35px;" class="verdi">
      <div class="benevning">fot</div>
      <label for="hestekraft">Hestekrefter</label>
      <input type="text" name="hestekraft" style="width:35px;" class="verdi">
      <div class="benevning">hk</div>
      <label for="maks_passasjer">Maks ant. passasjerer</label>
      <input type="text" name="maks_passasjer" style="width:35px;" class="verdi">
      <label for="time_pris">Utleiepris per time</label>
      <input type="text" name="time_pris" style="width:45px;" class="verdi">
      <div class="benevning">kr</div>
      <label for="bilde">Bilde</label>
      <input type="file" name="bilde">
      <div class="block" id="submit"><input type="submit" value="Legg til" name="registrer"></div>
    </form>
  </div>
</body>
</html>
