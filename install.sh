#!/usr/bin/bash

clear
echo "PILIH DULU"
echo "......."
echo "1. cd mikel"
echo "2. npm start"
echo "3. exit"

read -p "pilihan anda >" pil;

if [ $pil -eq 1 ];
then echo "Pilih Mana? >"
read jum;
let pilih=jum*2;
elif [ $pil -eq 2 ];
then
echo "Pilih Mana? >"
read jum;
let pilih=jum*3
then
exit 0
echo "maaf pilihan anda tidak ada";
fi

echo "pilih $bayar";
echo "arigato"
