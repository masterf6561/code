#!/bin/bash

# Declare the array of 2-element arrays
mapfile -t array
check_duplicates() {
  local array=("$@")
  local seen=()

  for element in "${array[@]}"; do
    if [[ " ${seen[*]} " == *" $element "* ]]; then
      echo "Duplicate element: $element"
    else
      seen+=("$element")
    fi
  done
}

# Call the function with the array as argument
check_duplicates "${input[@]}"
