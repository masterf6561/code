use std::io;

fn is_valid_luhn(number: &Vec<i32>) -> bool {
    let mut sum = 0;
    let length = number.len();
    let parity = length % 2;
    for i in 0..length-2 {
        println!("{}", number[i]);
        let current_number = number[i];
        if current_number % 2 != parity.try_into().unwrap() {
            sum += current_number;
        } else if current_number > 4 {
            sum += 2 * current_number - 9;
        } else {
            sum += 2 * current_number;
        }
    }
    println!("{}", sum);
    return (10 - (sum % 10)) % 10 == number[length - 1];
}

fn main() {
    println!("Credit Card Validator");
    println!("Please enter the Credit Card Number you want to validate");
    let mut input = String::new();
    io::stdin()
        .read_line(&mut input)
        .expect("Error while reading input");
    let input: String = input.trim().parse().expect("Error while parsing input");
    let mut number: Vec<i32> = Vec::new();
    for c in input.chars() {
        match c.to_digit(10) {
            Some(n) => number.push(n as i32),
            _ => println!("Error"),
        }
    }
    let is_valid = is_valid_luhn(&number);
    match is_valid {
        true => println!("The Credit Card Number {} is valid!", input),
        false => println!("The Credit Card Number {} is not valid", input),
    }
}
