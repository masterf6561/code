use serde_json::{json, Value};
use std::io;
use std::{
    io::{prelude::*, BufReader},
    net::{TcpListener, TcpStream},
};

fn calc_color_placement(tubes: &Vec<Vec<i32>>) -> Vec<f32> {
    let mut color_placements: Vec<i32> = vec![0; tubes.len() - 2];
    for (_tube_index, tube) in tubes.iter().enumerate() {
        for (color_index, color) in tube.iter().enumerate() {
            let current_color_sum = color_placements[(*color - 1) as usize];
            color_placements[(*color - 1) as usize] = current_color_sum + (color_index as i32) + 1;
        }
    }
    let mut color_placement_avg: Vec<f32> = vec![0.0; color_placements.len()];
    for (index, value) in color_placements.iter().enumerate() {
        color_placement_avg[index] = (*value) as f32 / 4.0;
    }
    return color_placement_avg;
}

fn min(color_placement_avg: Vec<f32>) -> i32 {
    let mut highest_colors_index = 0;
    let mut highets_color = 99999.9;
    for (index, placement_avg) in color_placement_avg.iter().enumerate() {
        if placement_avg < &highets_color {
            highest_colors_index = index;
            highets_color = *placement_avg;
        }
    }
    highest_colors_index as i32 + 1
}

fn check_solved(tubes: &Vec<Vec<i32>>) -> bool {
    for tube in tubes {
        if !tube.iter().all(|x| *x == tube[0]) {
            return false;
        }
    }
    return true;
}

#[derive(Debug)]
struct Move {
    src_tube: i32,
    tgt_tube: i32,
}

fn get_top_color(tube: &Vec<i32>) -> i32 {
    for (color_index, color) in tube.iter().enumerate() {
        if *color != 0 && color_index != 0 {
            return *color;
        }
    }
    return 0;
}

fn find_target_tube(color: &i32, tubes: &Vec<Vec<i32>>, src_tube_index: &usize) -> i32 {
    for (tube_index, tube) in tubes.iter().enumerate() {
        if get_top_color(&tube) == *color && tube_index != *src_tube_index {
            return tube_index as i32 + 1;
        }
    }
    return 0;
}

fn find_empty_tube(tubes: &Vec<Vec<i32>>) -> i32 {
    for (tube_index, tube) in tubes.iter().enumerate() {
        if tube.is_empty() {
            return tube_index as i32 + 1;
        }
    }
    return 0;
}

fn find_moves(tubes: &Vec<Vec<i32>>, hightest_color: &i32) -> Vec<Move> {
    let mut moves: Vec<Move> = Vec::new();
    for (tube_index, tube) in tubes.iter().enumerate() {
        let top_color = get_top_color(&tube);
        if top_color == *hightest_color {
            println!("matching");
            let tgt_tube = find_target_tube(&top_color, &tubes, &tube_index);
            println!("{tgt_tube}");
            if tgt_tube != 0 {
                moves.push(Move {
                    src_tube: tube_index as i32,
                    tgt_tube,
                });
            } else {
                let empty_tube_index = find_empty_tube(&tubes);
                if empty_tube_index != 0 {
                    moves.push(Move {
                        src_tube: tube_index as i32,
                        tgt_tube: empty_tube_index,
                    })
                }
            }
        }
    }
    return moves;
}

fn solve_puzzle(tubes: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
    let mut solved = false;
    let color_placements = calc_color_placement(&tubes);
    let hightest_color = min(color_placements);
    while !solved {
        let moves = find_moves(&tubes, &hightest_color);
        println!("{:?}", moves);
        if moves.len() == 0 {
            println!("No more moves");
        }
        solved = check_solved(&tubes);
        println!("{solved}");
        solved = true;
    }
    return tubes;
}

fn main() {
    let listener = TcpListener::bind("localhost:7878").unwrap();
    for stream in listener.incoming() {
        let stream = stream.unwrap();
        handle_connection(stream);
    }

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

    let mut tubes: Vec<Vec<i32>> = vec![vec![]; tube_count + 2];
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

fn handle_connection(mut stream: TcpStream) {
    let mut buf_reader = BufReader::new(&mut stream);
    let mut http_request_lines = Vec::new();

    loop {
        let mut line = String::new();
        buf_reader.read_line(&mut line).unwrap();
        if line == "\r\n" || line == "" {
            break;
        }
        http_request_lines.push(line);
    }

    // Parse the request method, path, and HTTP version from the request line
    let request_line = http_request_lines[0].clone();
    let request_line = request_line.trim_end_matches("\r\n").to_string();

    let (status_line, content) = match &request_line[..] {
        "GET / HTTP/1.1" => ("HTTP/1.1 200 OK", json!({ "message": "Hello from server" })),
        "POST /post HTTP/1.1" => {
            loop {
                let mut line = String::new();
                buf_reader.read_line(&mut line).unwrap();
                if line == "\r\n" || line == "" {
                    break;
                }
                println!("{line}");
                http_request_lines.push(line);
            }
            ("HTTP/1.1 200 OK", json!({ "message": "You Posted" }))
        }
        _ => (
            "HTTP/1.1 404 NOT FOUND",
            json!({ "message": "Page not found" }),
        ),
    };
    let response_body = serde_json::to_string(&content).unwrap();
    let length = response_body.len();
    let response = format!(
        "{status_line}\r\nContent-Length: {length}\r\nAccess-Control-Allow-Origin: *\r\n\r\n{response_body}"
    );
    stream.write_all(response.as_bytes()).unwrap();
    stream.flush().unwrap();
}
