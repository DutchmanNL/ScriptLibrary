#!/bin/bash

service rpcbind start
echo "Mounte......."


mount nas/ordner/wo/das/image/rein/soll /media/sich 

echo "los gehts.. (j/n)"
read answer

if [ "$answer" != "n" ]; then
  echo "Sicherung läuft....."
  
#   mit lsblk schauen wie die SD-Karte heisst  
#       hier anpassen   
  dd if=/dev/mmcblk0 of=/media/sich/$(date "+%Y%m%d").sd.img bs=1M
  echo "fettisch.."          
fi 
