#!/bin/bash

mapfile -t array

array+=("${array[@]}" "${array[@]}")

echo ${concarray[@]}
