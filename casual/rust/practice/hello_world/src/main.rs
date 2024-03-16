use clap::Parser;

#[derive(Parser)]
struct BringArgs {
    instruction: String,
    product: String,
    description: String,
}

fn main() {
    let args = BringArgs::parse();

    println!(
        "Please {} {} of {}",
        args.instruction, args.description, args.product
    );
}
