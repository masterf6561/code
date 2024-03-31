use std::{io, usize};

fn main() {
    let mut first_line = String::new();
    io::stdin()
        .read_line(&mut first_line)
        .expect("Error while reading Input");

    let count: usize = first_line.parse().unwrap();

    let mut array_string = String::new();

    io::stdin()
        .read_line(&mut array_string)
        .expect("Error while readin second Input");

    let array: Vec<i32> = array_string
        .split_whitespace()
        .map(|s| s.parse().expect("Failed to parse"))
        .collect();

    if array.len() != count {
        println!("Wrong input count");
    }

    for i in 0..array.len() {
        print!("{}", array[array.len() - i]);
    }
}
