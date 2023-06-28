#!/bin/bash

mapfile -t array

declare -a answer=( ${array[@]/*[aA]*/} )   #filters all the words without an a or A
echo ${answer[@]}
