<?php
$db = new SQLite3("db/blogg.db");
?>

<header>
  <a href="index.php"><img src="img/logo.png"></a>
</header>
<div class="lower_header">
  <ul>
    <li><span><a href="info.php">Om bloggen</a></span></li>
    <li><span><a href="kontakt.php">Kontakt oss</a></span></li>
    <li><span><a href="#">
      <div class="dropdown">
        Kategori
        <div class="dropdown-content">
          <ul>
            <?php
            $sporring = "SELECT * FROM kategori";
            $resultat = $db->query($sporring);
            while ($rad = $resultat->fetchArray()) {
              $kategori = $rad["kategori"];
              $id = $rad["kat_id"];
              echo "<li><a href='kategori.php?kat_id=$id'>$kategori</a></li>";
            }
            ?>
          </ul>
        </div>
      </div>
    </a>
  </span>
</li>
</ul>
</div>
