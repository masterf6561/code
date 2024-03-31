use std::{io, usize};

fn main() {
    let mut input_string = String::new();
    let mut result = [0; 10];
    io::stdin()
        .read_line(&mut input_string)
        .expect("Error while reading Input");
    for char in input_string.chars() {
        if char.is_numeric() {
            let index = char.to_digit(10).unwrap() as usize;
            result[index] += 1;
        }
    }
    println!("{:?}", result);
}
