#!/bin/bash
read name
read number
if [ $number -gt 0 ]; then
	for i in $(seq $number)
	do
		echo "Hello $name!"
	done
fi
