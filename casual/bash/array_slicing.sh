#!/bin/bash

mapfile -t array

echo ${array[@]:3:5}
