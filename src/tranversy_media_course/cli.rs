use std::env;

pub fn run() {
    crate::tranversy_media_course::functions::greet("cli");

    let args: Vec<String> = env::args().collect();

    println!("Args: {:?}", args);
    println!("Args Vector length: {}", args.len());

    let command = 
        if args.len() > 1 { 
            args[1].clone()
        } else { 
            String::from("No arguments")
        };
    let name = "Brad";

    println!("Arg: {:?}", command);

    if command == "hello" {
        println!("Hi {}", name);
    } else if command == "status" {
        println!("Status is 100%");
    } else if command == "No arguments" {
        println!("You typed no arguments!");
    } else { println!("That is not a valid command") };
}