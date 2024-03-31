//https://www.hackerrank.com/challenges/dynamic-array-in-c/problem?isFullScreen=true
use std::io;

fn main() {
    let mut number_of_shelfs_string = String::new();
    io::stdin()
        .read_line(&mut number_of_shelfs_string)
        .expect("Error while readin shelfs");

    let number_of_shelfs: i32 = number_of_shelfs_string
        .trim()
        .parse()
        .expect("Not a number");

    let mut number_of_queries_string = String::new();
    io::stdin()
        .read_line(&mut number_of_queries_string)
        .expect("Error while reading queries");

    let mut number_of_queries: i32 = number_of_shelfs_string
        .trim()
        .parse()
        .expect("Not a number");

    while number_of_queries > 0 {
        number_of_queries -= 1;
        let mut current_query_string = String::new();
        io::stdin()
            .read_line(&mut current_query_string)
            .expect("Unable to read string");
        let mut number_of_shelfs_string = String::new();
        io::stdin()
            .read_line(&mut number_of_shelfs_string)
            .expect("Error while readin shelfs");

        let number_of_shelfs: i32 = number_of_shelfs_string.parse().expect("Not a number");

        let current_query: Vec<i32> = current_query_string
            .split_whitespace()
            .map(|s| s.parse().expect("Error while reading char"))
            .collect();

        let current_query_type: i32 = current_query[0];

        if current_query_type == 1 {
        } else if current_query_type == 2 {
            let mut input_string = String::new();

            io::stdin()
                .read_line(&mut input_string)
                .expect("Error while reading for type 2");

            let current_query: Vec<i32> = input_string
                .split_whitespace()
                .map(|s| s.parse().expect("Error while reading Number"))
                .collect();
        } else {
            let mut shelf_string = String::new();
        }

        println!("{:?}", current_query);
    }
}
