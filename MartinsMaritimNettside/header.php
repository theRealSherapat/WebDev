<?php
$db = new SQLite3("db/maritim.db");
?>
<header>
  <div class="buttons">
    <a href="info.php"><div class="info"><h3>Om oss</h3></div></a>
    <a href="leggtil.php"><div class="leggtil"><h3>Legg til båt</h3></div></a>
  </div>
  <a href="index.php"><img src="img/logo.png">
    <h1>Martins Maritim</h1></a>
  </header>
  <div class="menu">
    <ul>
      <?php
      $sporring = "SELECT * FROM kategori";
      $resultat = $db->query($sporring);
      while ($rad = $resultat->fetchArray()) {
        $kat_id = $rad["kat_id"];
        $kategori = $rad["kategori"];
        echo "
        <li>
        <h2><a href='kategori.php?kat_id=$kat_id'>$kategori</a></h2>
        </li>";
      }
      ?>
    </ul>
  </div>
