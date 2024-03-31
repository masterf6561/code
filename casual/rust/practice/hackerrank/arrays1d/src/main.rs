use std::{io, usize};

fn sum(array: Vec<i32>) -> i32 {
    let mut sum = 0;
    for num in &array {
        sum = sum + num;
    }
    return sum;
}

fn main() {
    let mut first_line = String::new();

    io::stdin()
        .read_line(&mut first_line)
        .expect("Failed to read Line");

    let count: usize = match first_line.trim().parse() {
        Ok(num) => num,
        Err(_) => {
            println!("Invalid Input");
            return;
        }
    };

    let mut second_line = String::new();

    io::stdin()
        .read_line(&mut second_line)
        .expect("Failed to read Line");

    let array: Vec<i32> = second_line
        .split_whitespace()
        .map(|s| s.parse().expect("Failed to parse Integer"))
        .collect();

    if array.len() != count {
        println!("Invlid Input");
    }

    let sum = sum(array);
    println!("{:?}", sum);
}
