use std::io;
include!("include.rs");

fn main() {
    println!("Input: ");

    let mut a = String::new();
    let mut b = String::new();

    io::stdin().read_line(&mut a).expect("Failed to read");

    let a: i32 = a.trim().parse().expect("invalid input");
    io::stdin().read_line(&mut b).expect("Failed to read");
    let b: i32 = b.trim().parse().expect("invalid input");

    let sol = add(a, b);

    println!("{}", sol);
}
