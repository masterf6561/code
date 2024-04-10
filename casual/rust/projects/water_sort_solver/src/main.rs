use std::io;

fn calc_highest_color(tubes: &Vec<Vec<i32>>) -> Vec<f32> {
    let color_count = tubes.len();
    let mut color_placements: Vec<f32> = vec![0.0; color_count];
    for (tube_index, tube) in tubes.iter().enumerate() {
        for (color_index, _color) in tube.iter().enumerate() {
            color_placements[tube_index] = (color_index + 1) as f32;
        }
    }
    println!("{:?}", color_placements);
    for index in 0..color_placements.len() {
        color_placements[index] += color_placements[index] / 4.0;
    }
    return color_placements;
}

fn solve_puzzle(tubes: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let color_placements = calc_highest_color(&tubes);
    println!("{:?}", color_placements);
    return tubes;
}

fn main() {
    println!("Please Enter the current Puzzle in the following Form: ");
    println!("First enter the number of tubes not counting the empty tubes!");
    println!("(Only working for 2 empty tubes)");

    let mut tube_count = String::new();
    io::stdin()
        .read_line(&mut tube_count)
        .expect("Error while reading tube Count");
    let tube_count: usize = tube_count.trim().parse().unwrap();

    println!("\nThen enter each tube like so: \n");
    println!("1 3 6 2 \n");
    println!(
        "Where each number is a color. Press enter to confirm one tube and enter the next one. \n"
    );
    println!("The tubes are: \n");

    let mut tubes: Vec<Vec<i32>> = vec![vec![]; tube_count];
    for i in 0..tube_count {
        let mut current_tube = String::new();
        io::stdin()
            .read_line(&mut current_tube)
            .expect("Error while reading this Tube");
        let current_tube: Vec<i32> = current_tube
            .split_whitespace()
            .map(|s| s.parse().expect("Error while reading substring"))
            .collect();
        if current_tube.len() != 4 {
            panic!(
                "\n The tube only has 4 slots. You gave {}. \n",
                current_tube.len()
            );
        }
        tubes[i] = current_tube;
    }
    solve_puzzle(tubes);
}
