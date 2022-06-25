use std::env;

pub fn run(greet: fn(&str)) {
    greet("cli");

    let args: Vec<String> = env::args().collect();
    let command = args[1].clone();
    let name = "Brad";

    println!("Args: {:?}", command);

    if command == "hello" {
        println!("Hi {}", name);
    } else if command == "status" {
        println!("Status is 100%");
    }
    else { println!("That is not a valid commanad") };
}