<?php

copy($_FILES['archivo']['tmp_name'],$_FILES['archivo']['name']); 

header("location: ./csv.php");

?>
