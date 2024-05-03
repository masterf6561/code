use core::panic;
use std::{
    io::{prelude::*, BufReader},
    net::{TcpListener, TcpStream},
    thread,
    time::Duration,
};

use http_server::ThreadPool;

fn handle_connection(mut stream: TcpStream) {
    let buf_reader = BufReader::new(&mut stream);
    let http_request: Vec<_> = buf_reader
        .lines()
        .map(|result| result.unwrap())
        .take_while(|line| !line.is_empty())
        .collect();
    let request_line = &http_request[0];
    let (status_line, content) = match &request_line[..] {
        "GET / HTTP/1.1" => ("HTTP/1.1 200 OK", "Hello from server"),
        "POST /post HTTP/1.1" => ("HTTP/1.1 200 OK", "You posted"),
        "GET /sleep HTTP/1.1" => {
            thread::sleep(Duration::from_secs(5));
            ("HTTP/1.1 200 OK", "sleepy")
        }
        _ => ("HTTP/1.1 404 NOT FOUND", "Error 404 not found"),
    };
    let length = content.len();
    let response = format!("{status_line}\r\nContent-Length: {length}\r\n\r\n{content}");
    stream.write_all(response.as_bytes()).unwrap();
}

fn codemoon_handle(mut stream: TcpStream) {
    loop {
        let mut read = [0; 1028];
        match stream.read(&mut read) {
            Ok(n) => {
                if n == 0 {
                    //connection was closed
                    break;
                }
                stream.write(&read[0..n]).unwrap();
            }
            Err(err) => {
                panic!("{}", err);
            }
        }
    }
}

fn main() {
    let listener = TcpListener::bind("localhost:7878").unwrap();
    // let pool = ThreadPool::new(8);
    // for stream in listener.incoming() {
    //     let stream = stream.unwrap();
    //     pool.execute(|| {
    //         handle_connection(stream);
    //     });
    // }
    for stream in listener.incoming() {
        match stream {
            Ok(stream) => {
                thread::spawn(move || {
                    handle_connection(stream);
                });
            }
            Err(err) => {
                panic!("{}", err);
            }
        }
    }
}
