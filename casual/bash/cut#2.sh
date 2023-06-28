#!/bin/bash

while read lines;
do
    echo $lines | cut -c2,7 #on mac also "cut -c2 -c7" worked, but not on hackerrank
done