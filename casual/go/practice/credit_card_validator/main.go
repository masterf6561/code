package main

import (
	"fmt"
	"strconv"
)

func isValidCard(card_number string, length int) bool {
	sum := 0
	parity := length % 2
	for i := length - 2; i >= 0; i-- {
		number, _ := strconv.Atoi(string(card_number[i]))
		if i%2 != parity {
			sum += number
		} else if number > 4 {
			sum += 2*number - 9
		} else {
			sum += 2 * number
		}
	}
	last_value, _ := strconv.Atoi(string(card_number[length-1]))
	return last_value == (10-(sum%10))%10
}

func main() {
	fmt.Println("Credit Card Validator")
	fmt.Println("Please enter the Credit Card Number you want to check:")
	var input string
	_, err := fmt.Scanln(&input)
	if err != nil {
		fmt.Println("Error while reading your input")
		return
	}

	length := len(input)
	if err != nil {
		fmt.Println("Invalid input, the Card Number must be numeric")
	}

	is_valid := isValidCard(input, length)
	if is_valid {
		fmt.Printf("The card Number %s is valid", input)
	} else {
		fmt.Printf("The card Number %s is not valid", input)
	}
}
