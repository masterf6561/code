//https://www.hackerrank.com/challenges/dynamic-array-in-c/problem?isFullScreen=true
use std::io;

fn main() {
    let mut number_of_shelves_string = String::new();
    io::stdin()
        .read_line(&mut number_of_shelves_string)
        .expect("Error while readin shelves");

    let number_of_shelves: i32 = number_of_shelves_string
        .trim()
        .parse()
        .expect("Not a number");

    let mut library: Vec<Vec<i32>> = vec![vec![]; number_of_shelves.try_into().unwrap()];

    let mut number_of_queries_string = String::new();
    io::stdin()
        .read_line(&mut number_of_queries_string)
        .expect("Error while reading queries");

    let mut number_of_queries: i32 = number_of_shelves_string
        .trim()
        .parse()
        .expect("Not a number");

    while number_of_queries > 0 {
        number_of_queries -= 1;
        let mut current_query_string = String::new();
        io::stdin()
            .read_line(&mut current_query_string)
            .expect("Unable to read string");

        let current_query: Vec<i32> = current_query_string
            .split_whitespace()
            .map(|s| s.parse().expect("Error while reading char"))
            .collect();

        let current_query_type: i32 = current_query[0];

        if current_query_type == 1 {
            let shelve: usize = current_query[1] as usize;
            let book_pages: i32 = current_query[2];

            library[shelve].push(book_pages);
        } else if current_query_type == 2 {
            let shelve: usize = current_query[1].try_into().unwrap();
            let book: usize = current_query[2].try_into().unwrap();
            println!("{}", library[shelve][book]);
        } else {
            let shelve: usize = current_query[1].try_into().unwrap();
            println!("{}", library[shelve].len());
        }
    }
}
