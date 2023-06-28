use std::io;
use std::io::Write;

fn rem_last(value: &str) -> &str {
    let mut chars = value.chars();
    chars.next_back();
    chars.as_str()
}

fn handleinputs() {

    let myname: &str = "moritz";
    let myword: &str = "gehomert27";

    let mut username = String::new();
    let mut password = String::new();

    print!("Username: ");
    io::stdout().flush().unwrap();
    io::stdin()
        .read_line(&mut username)
        .expect("Failed to read");
    print!("Password: ");
    io::stdout().flush().unwrap();
    io::stdin()
        .read_line(&mut password)
        .expect("Failed to read");
    if myname == rem_last(&username) && myword == rem_last(&password){
        println!("acces granted");
    } else {
        println!("acces denied");
    }
}
/* 
fn space_func() {
    let spaces = "      ";
    println!("{spaces}.");
    let spaces = spaces.len();
    println!("{spaces}.");
}
*/

fn main() {
    //space_func();
    handleinputs();
}
