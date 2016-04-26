#!/bin/bash

FILE=$1

if [ "$FILE" == "" ]
then
    echo "PLEASE ADD PATH YOU WANT TO WATCH"
    exit
fi

inotifywait -q -m -e close_write --format %e $FILE |
while read events; do
    echo " ==> Triggered SCSS Update"
    bash build.sh
done
