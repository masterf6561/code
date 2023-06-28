fn return_bool() -> bool {
    let val: bool = true;
    return val;
}

fn tuple() {
    let mut tuple: (i32, char, bool, &str) = (12, 'c', true, "Hellow");
    tuple.1 = '&';
    println!("{:?}", tuple); //with # optionally {:#?}
                             //indexing with tuple.0
}

fn array() {
    let mut arr = [1, 2, 3, 4, 5];
    arr[4] = 9;
    println!("{:?}", arr);
}

fn main() {
    tuple();
    array();
    //let letter: char = '&';
    const SECONDS_IN_MINUTE: u32 = 60;
    let x = 4;
    println!("x = {x} but x² = {}", x * x);
    {
        let x = "hello";
        println!("{x} or {}", SECONDS_IN_MINUTE);
    }
    println!("{}", return_bool());
}
